import { useState } from "react"


function BlogForm() {

    interface BlogHeader {
        title: string, // '?' indicates optional
        date: string,
        summary: string,
        featured_media_link: string,
        featured_media_caption: string,
        featured_media_attribution: string,
    }

    interface BlogSection {
        heading?: string, // '?' indicates optional
        paragraph?: string,
        media_link?: string,
        media_caption?: string,
        media_attribution?: string,
    }

    const [sections, setSections] = useState<BlogSection[]>([]);


    function addSection() {
        // you might already have an exaple of an implementation somewhere.


        // copy the existing array
        // append an uninitialized, blog section object, update state

        // how whould you update that particular object??
    }


    return (
        <>
            <div className="container mt-10 ml-auto mr-auto min-h-screen">
                <div className="ml-auto mr-auto max-w-5xl">
                    <form>
                        <div className="mb-5">

                            <div className="text-3xl dark:text-white font-semibold">
                                Blog Information
                            </div>

                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                            <div>
                                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Title</label>
                                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>

                            <div className="mt-10">
                                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Date</label>
                                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>

                            <div className="mt-10">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Summary of Blog</label>
                                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment...">
                                </textarea>
                            </div>

                            <div className="mt-10">
                                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Featured Media Link</label>
                                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>

                            <div className="mt-10">
                                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Featured Media Caption</label>
                                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>

                            <div className="mt-10">
                                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Featured Media Attribution</label>
                                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>



                            <div className="text-3xl dark:text-white font-semibold mt-10">
                                Blog Content
                            </div>

                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                            {/*Make this dynamic!!! */}


                            <div>
                                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Heading</label>
                                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>


                            <div className="mt-10">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Paragraph</label>
                                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment...">
                                </textarea>
                            </div>



                            <div className="mt-10">
                                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Media Link</label>
                                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>

                            <div className="mt-10">
                                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Media Caption</label>
                                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>

                            <div className="mt-10">
                                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Media Attribution</label>
                                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>


                            <div>
                                <button onClick={() => addSection()} className="mt-10 transition ease-in-out delay-10 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded">
                                    make another section
                                </button>
                            </div>




                        </div>

                        
                        

                    </form>
                </div>
            </div>
        </>
    )
}

export default BlogForm