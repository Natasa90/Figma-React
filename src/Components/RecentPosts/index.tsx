import './recentPosts.styles.css'

export const RecentPosts = () => {
    return (
        <div className="middle">
            <div className="posts">
                <div className="box1">Recent Posts</div>
                <div className="box2">View all</div>
            </div>
            <div className="postings">
                <div className="midtext1">
                    <h3>Making a design system from scratch</h3>
                    <p>12 Feb 2020 &nbsp; &nbsp; | &nbsp; &nbsp; Design, Pattern</p>
                    <p className="p1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className="midtext2">
                    <h3>Creating pixel perfect icons in Figma</h3>
                    <p>12 Feb 2020 &nbsp; &nbsp; | &nbsp; &nbsp; Figma, Icon Design</p>
                    <p className="p1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> 
                </div>
            </div>
        </div>  
    )
}