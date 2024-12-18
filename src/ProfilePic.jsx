import data from "./data"
import "./ProfilePic.css"
import Animated from "./Animated"

export default function (props) {

    const pic = { ...data.profile.pic, ...props }

    return <>
        <Animated name="animate__rollIn">
            <div class="resume-wrapper">
                <div class="profile">
                    <div class="picture-resume-wrapper">
                        <div class="circle" >
                            <img src={pic.src} alt={pic.alt} />
                        </div>
                    </div>
                </div>
            </div>
        </Animated>
    </>
}