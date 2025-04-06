import { BlogHeader, BlogSection } from "../blog-form/blog-form.component";


interface BlogData {
    header: BlogHeader,
    sections: BlogSection[],
}

function RenderedBlogView({header, sections }: BlogData) { // incoming props

        const { 
            title,
            category,
            summary,
            featured_media_link,
            featured_media_caption,
            featured_media_attribution
        } = header;



    return (
        <>
            
            <title> {title} </title>

                <div className="items-center justify-center dark:text-slate-100 min-w-5xl ml-auto mr-auto min-h-screen">

                    <div className="flex grid-cols-4 gap-4">
                        <div className="flex flex-col">
                            <div className="dark:bg-slate-700 p-16 min-w-3xl mt-8 rounded-md">
                                <h4 className="text-xl">Projects / {category}</h4>

                                <h2 className="text-3xl">{title}</h2>

                                <p className="pt-8">{summary}</p>

                                <h4 className="text-sm font-bold pt-5">Date will go here.</h4>
                            </div>

                            <div>
                                <div className="flex flex-col">

                                    {
                                        featured_media_link.length > 0 &&

                                        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 mx-auto mt-8">
                                            <img src={featured_media_link} className="w-full h-full rounded-lg" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                                                {featured_media_caption}
                                            </h3>
                                            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                                {featured_media_attribution}
                                            </div>
                                        </article>

                                    }

                                    

                                    <div className="lg:ml-20 max-w-4xl text-lg pb-10">
                                        {sections.map((this_section, key) => {
                                            
                                            const {
                                                heading,
                                                paragraph,
                                                media_link,
                                                media_caption,
                                                media_attribution
                                            } = this_section;

                                            return (

                                                <div key={key}>
                                                    <div className="">
                                                        <div className="pt-10">
                                                            
                                                          <h4 className="text-3xl font-semibold pb-5"> {heading} </h4>                                                            
                                                            <div className="text-lg"> 
                                                                { // need to process line breaks as <br/> to reflect them in output
                                                                paragraph.split("\n").map((line, key) => {                                                                    
                                                                    return (
                                                                        <div key={key}>
                                                                            <div>
                                                                                <p>
                                                                                    {line}
                                                                                </p>
                                                                                <br/>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })} 
                                                            </div>
                                                        </div>

                                                        
                                                    </div>

                                                    { /* If no media, skip this step */
                                                        media_link.length > 0 && 
                                                        
                                                        <>
                                                            <div className="p-10 max-w-lg max-h-lg mx-auto">
                                                                <img src={media_link} className="w-full h-full rounded-lg" alt="" />
                                                            

                                                                <div className="text-sm">
                                                                    <div>
                                                                        {media_caption}
                                                                    </div>

                                                                    <div>
                                                                        {media_attribution}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                        
                                                    }

                                                </div>
                                            )
                                        })}


                                        







                                    </div>

                                    <div className="lg:ml-20 mb-28">
                                        <h4 className="font-bold text-2xl">Thanks for reading!</h4>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )

}

export default RenderedBlogView;