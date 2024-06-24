import './featuredWorks.styles.css'

export const FeaturedWorks = () => {
    return (
        <div className="bottom">
            <div className="featured">Featured works</div>
                <div className="box-top">
                    <div className="col1"><img className="bottom-image" src="https://th.bing.com/th/id/OIP.k87HfgxPBa8dKQ_CLAxsuwAAAA?rs=1&pid=ImgDetMain" alt="dashboard photo" /></div>
                    <div className="col2">
                        <h2>Designing Dashboards</h2>
                        <p><span className="span-left" >2020</span><span className="span-right">Dashboard</span></p>
                        <p className="p1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>    
            <div className="box-middle">
                    <div className="col1"><img className="bottom-image" src="https://media.craiyon.com/2023-10-15/0fb3d3ff9a7244dab7399597195da1c9.webp" alt="an image of a woman" /></div>
                    <div className="col2">
                        <h2>Vibrant Portraits of 2020</h2>
                        <p><span className="span-left" >2018</span><span className="span-right">Illustration</span></p>
                        <p className="p1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
            </div>    
            <div className="box-bottom">
                    <div className="col1"><img className="bottom-image" src="https://img00.deviantart.net/371e/i/2012/280/9/c/typography_word_by_wellgraphic-d2ql9m5.png" alt="typography image" /></div>
                    <div className="col2">
                        <h2>36 Days of Malayalam type</h2>
                        <p><span className="span-left" >2018</span><span className="span-right">Typography</span></p>
                        <p className="p1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div> 
            </div>
        </div>   
    )
}