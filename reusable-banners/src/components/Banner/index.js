import "./index.css";
const Banner = (props) => {
        const {bannercarddetails} = props;
        const{headerText,descriptionText,classname} = bannercarddetails;
        return(
                <li className={`${classname} banner-card-item`}>
                    <div>
                        <h1 className="bannerheadertext">{headerText}</h1>
                        <p className="bannerdescriptiontext">{descriptionText}</p>
                        <button class="custom-button">ShowMore</button>
                    </div>
                </li>
            )

}
    

export default Banner;