import '../../../styles/Component/HomePage/featureHome.module.css';

const featureHome = ({title}) => {
  return (
    <div className="Home__feature-container">
      <div className="Home__feature-title">
        <p><a href=''>{title}</a></p>
      </div>
      <div className="Home__feature-picture">
      </div>
    </div>
  )
}

export default featureHome