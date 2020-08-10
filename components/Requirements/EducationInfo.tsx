import Wrapper from "../Wrapper"
import { useState, useEffect } from "react";
import Icon from "@ant-design/icons";
import TheoryIcon from "../../public/assets/svg/theoryIcon";
import PracticeIcon from "../../public/assets/svg/practiceIcon";
import ProjectIcon from "../../public/assets/svg/projectIcon";
import { useWindowSize } from "../../services/sliderSetting";

const EducationInfo = () => {

    const size = useWindowSize();

    const number = 16;
    const [lessons, setLessons] = useState(0);

    useEffect(() => {
        setLessons(number);
    }, []);
    return (
        <div className="education" id="education">
            <style jsx>
                {`  
                    .education {
                        margin-bottom: 9.55vh;
                    }
                    h1 {
                        font-size: 2.375rem;
                        text-align: center;
                    }

                    p {
                        margin: 3% 0 8% 40%;
                        font-size: 1.25rem;
                    }

                    .flex-holder {
                        display: grid;
                        grid-template-columns: 30% 30% 30%;
                        column-gap: 6%;
                    }

                    .content-holder h3 {
                        font-size: 0.9rem;
                        padding: 10% 10% 15% 30%;
                    }

                    @media (max-width: 1024px) {
                        .flex-holder {
                            display: flex;    
                            flex-direction: column;
                        }

                        p {
                            margin: 10%auto;
                            text-align: center;
                        }

                        .content-holder {
                            text-align: center;
                            display: flex;
                            flex-direction: column;
                        }
                        

                        .content-holder h3 {
                            font-size: 0.9rem;
                            padding: 0;
                            margin-bottom: 20%;
                        }

                        .icon {
                            margin: 0;
                        }
                    }
                `}
            </style>
            <Wrapper>
                <h1>КАК ПРОХОДИТ ОБУЧЕНИЕ</h1>
                <p>{lessons} уроков, из которых: </p>
                <div className="flex-holder">
                    <div className="content-holder">
                        <TheoryIcon className="icon" style={{ marginRight: size.width <= "1024" ? "0" : "10%", marginBottom: "3%", }} />
                        <h3>
                            20% - Теория
                        </h3>
                    </div>
                    <div className="content-holder">
                        <PracticeIcon className="icon" style={{ marginBottom: "3%", }} />
                        <h3>
                            40% - Практика
                        </h3>
                    </div>
                    <div className="content-holder">
                        <ProjectIcon className="icon" style={{marginLeft: size.width <= "1024" ? "0" : "20%", marginBottom: "3%",}}/>
                        <h3>
                            40% - Проектная работа
                        </h3>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default EducationInfo;
