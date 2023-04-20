import {useState} from 'react'
import {AiFillQuestionCircle} from 'react-icons/ai';
import styles from '../../../styles/ComponentDesign/ComponentDesignComp/questionHover.module.css'

const QuestionHover = (props) => {
    const [showComponent, setShowComponent] = useState(false);

    const handleMouseEnter = () => {
    setShowComponent(true);
    };
    const handleMouseLeave = () => {
    setShowComponent(false);
    };

return (
    <div
    className={styles.hoverArea}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
    <AiFillQuestionCircle className={styles.questionMarkHover}/>
    {showComponent && (
        <div className={styles.questionDescribtion}>
        {props.title}
        </div>
    )}
</div>
);
}

export default QuestionHover