import { ChangeEvent, useState } from "react"
import RenderedBlogView from "../rendered-blog-view/rendered-blog-view";
import { uploadBlog } from "../../utils/firebase/firebase-conn.util";
import { BlogStorageType } from "../../types/blogStorageType.type";


// structure for blog header
export interface BlogHeader {
    title: string, // '?' indicates optional
    category: string,
    summary: string,
    featured_media_link: string,
    featured_media_caption: string,
    featured_media_attribution: string,
}

// structure for blog sectionals
export interface BlogSection {
    heading: string, // '?' indicates optional
    paragraph: string,
    media_link: string,
    media_caption: string,
    media_attribution: string,
}

function BlogForm() {

    // header memory
    const [header, setHeader] = useState<BlogHeader>(
        {
            title: "",
            category: "",
            summary: "",
            featured_media_link: "",
            featured_media_caption: "",
            featured_media_attribution: "",
        }
    );

    // section(s) memory
    const [sections, setSections] = useState<BlogSection[]>(
        [
            {
                heading: "",
                paragraph: "",
                media_link: "",
                media_caption: "",
                media_attribution: ""
            }
        ]
    );


    const handleSubmit = async () => { // pack and ship
        try {

            const blog_package = {
                header: header,
                content: sections
            } as BlogStorageType;
    
            const collection_name = header.category.replace(/ /g, "-").toLowerCase();
            const document_name = header.title.replace(/ /g, "-").toLowerCase();
    
            await uploadBlog(collection_name, document_name, blog_package);
            console.log("Done!");

        } catch (error) {
            console.log(error);
        }
    }


    function addSection() {
        
        const new_section = {
            heading: "",
            paragraph: "",
            media_link: "",
            media_caption: "",
            media_attribution: ""
        } as BlogSection;

        setSections([...sections, new_section]); // add new section
    }


    function handleHeaderChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) { // data is expected to be either input or text area
        const { name, value } = event.target;
        setHeader({...header, [name]: value}) // e.g. update header with old values and title: "hello world" (the updated value)
        //console.log(header);
    }


    function handleSectionChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, key: number) {

        //console.log(key);

        const { name, value } = event.target;
        
        // this approach is safe because it still treats the state memory as immutable.
        const updated_sections = sections.map((this_section, this_key) => {
            // map is returning each element if there is something to do with it, without an else condition where there is no op, we need to return that obj as it is, otherwise it will be null
            if (this_key === key) { // update obj in array with matching key
                return { ...this_section, [name]: value };
            }
            else { // leave all other original objs in array as they are 
                return this_section
            }
        
        }) as BlogSection[]; // For the love of god. Typescript, my brother in christ, I know that this varible will be a BlogSection type.
        
        setSections(updated_sections); // need the above logic to return the complete array + the modification of this will fail
        //console.log(updated_sections);
    }


    return (
        <>
            <div className="container mt-10 ml-auto mr-auto min-h-screen">
                <div className="grid grid-cols-3 gap-4">
                    
                    <div className="max-h-screen overflow-y-auto">
                        <div className="ml-auto mr-auto max-w-5xl pl-5 pr-5">
                            <form>
                                <div className="mb-5">

                                    <div>
                                        <button type="submit" onClick={() => handleSubmit()} className="mt-10 transition ease-in-out delay-10 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded">
                                            Submit
                                        </button>
                                    </div>

                                    <div className="text-3xl dark:text-white font-semibold">
                                        Blog Information
                                    </div>

                                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                                    <div>
                                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Title</label>
                                        <input type="text" id="base-input"
                                        name="title"
                                        value={header.title}
                                        onChange={(e) => handleHeaderChange(e)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="mt-10">
                                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Category</label>
                                        <input type="text" id="base-input"
                                        name="category"
                                        value={header.category}
                                        onChange={(e) => handleHeaderChange(e)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="mt-10">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Summary of Blog</label>
                                        <textarea id="message" rows={4} 
                                        name="summary"
                                        value={header.summary}
                                        onChange={(e) => handleHeaderChange(e)}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
                                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment...">
                                        </textarea>
                                    </div>

                                    <div className="mt-10">
                                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Featured Media Link</label>
                                        <input type="text" id="base-input" 
                                        name="featured_media_link"
                                        value={header.featured_media_link}
                                        onChange={(e) => handleHeaderChange(e)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                    </div>

                                    <div className="mt-10">
                                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Featured Media Caption</label>
                                        <input type="text" id="base-input" 
                                        name="featured_media_caption"
                                        value={header.featured_media_caption}
                                        onChange={(e) => handleHeaderChange(e)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                    </div>

                                    <div className="mt-10">
                                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Featured Media Attribution</label>
                                        <input type="text" id="base-input" 
                                        name="featured_media_attribution"
                                        value={header.featured_media_attribution}
                                        onChange={(e) => handleHeaderChange(e)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                    </div>



                                    <div className="text-3xl dark:text-white font-semibold mt-10">
                                        Blog Content
                                    </div>

                                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                                    

                                    {sections.map((this_section, key) => {

                                        return(

                                            <div key={key} className="mb-10 p-10 rounded-2xl dark:bg-slate-600 text-white">

                                                <div className="text-3xl font-semibold">
                                                    Section: #{key+1}
                                                </div>

                                                <div>
                                                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Heading</label>
                                                    <input type="text" id="base-input" 
                                                    name="heading"
                                                    onChange={(e) => handleSectionChange(e, key)}
                                                    value={this_section.heading}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                                </div>


                                                <div className="mt-10">
                                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Paragraph</label>
                                                    <textarea id="message" rows={4} 
                                                    name="paragraph"
                                                    value={this_section.paragraph}
                                                    onChange={(e) => handleSectionChange(e, key)}
                                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
                                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment...">
                                                    </textarea>
                                                </div>



                                                <div className="mt-10">
                                                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Media Link</label>
                                                    <input type="text" id="base-input" 
                                                    name="media_link"
                                                    value={this_section.media_link}
                                                    onChange={(e) => handleSectionChange(e, key)}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                                </div>

                                                <div className="mt-10">
                                                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Media Caption</label>
                                                    <input type="text" id="base-input" 
                                                    name="media_caption"
                                                    value={this_section.media_caption}
                                                    onChange={(e) => handleSectionChange(e, key)}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                                </div>

                                                <div className="mt-10">
                                                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Media Attribution</label>
                                                    <input type="text" id="base-input" 
                                                    name="media_attribution"
                                                    value={this_section.media_attribution}
                                                    onChange={(e) => handleSectionChange(e, key)}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                                </div>
                                            </div>

                                        )

                                    })}


                                    <div>
                                        <button type="button" onClick={() => addSection()} className="mt-10 transition ease-in-out delay-10 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded">
                                            make another section
                                        </button>
                                    </div>




                                </div>

                                
                                

                            </form>
                        </div>
                    </div>


                    <div className="max-h-screen overflow-y-auto col-span-2">
                        <RenderedBlogView header={header} sections={sections} />
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default BlogForm