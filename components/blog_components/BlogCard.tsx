import { Blog } from "@/types/global";

export default function BlogCard({props}: {props: Blog}){
    return(
      <>
        {/* <div className="mt-12 pt-3" data-index={1}> */}
          <style>
            {`@media (max-width:600px) {
      .post-card,.properties{
        max-width:85% !important;
        min-width:40% !important;
        margin:0 auto;
      }
      .post-card{
        padding-right:50px
      }
     
}`}
          </style>
          {/* <div className="card post-card portrait round">
            <div className="card-image figure" >
              <img
                className="responsive-img"
                src={
                    `${props.thumbnail}`
                }
              ></img>
            </div>
            <div className="properties">
              <div className="use-text-subtitle2 text-truncate">
                <strong>{props.title}</strong>
              </div>
              <div className="caption py-4 ">{props.posted} ago</div>
              <div className="card-content desc">
                <p>
                  {props.description}
                </p>
              </div>
              <div className="card-action">
                <a
                  className="btn btn-outlined primary action-btn waves-effect"
                  href={`/blog/${props.title.replace(/\s/g, "-")}-${props.id}`}
                >
                  read more
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="BlogCarder">
          <div className="ImageCarder">
            <img src={
                    `${props.thumbnail}`
                } alt="" />
          </div>
          <div className="BlogContenter">
            <h3>{props.title}</h3>
            <p>{props.posted}{"  ago"}</p>
            <p>{props.description}</p>
           <div className="">
           <a  href={`/blog/${props.title.replace(/\s/g, "-")}-${props.id}`}>READ MORE</a>
           </div>
          </div>
        </div>
        </>
    )
}