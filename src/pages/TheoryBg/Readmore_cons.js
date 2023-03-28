import {useState} from 'react'


const Readmore_cons = () => {
    const [notshow, setNotshow] = useState(false)
  return (
    <div className={styles.content}>
        <div className={styles.title}>Takeoff</div>
        <span className={styles.long_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut cupiditate repellendus optio iste, atque pariatur dolorum ex alias dolores, recusandae totam, molestias praesentium ipsam laudantium non corrupti nostrum corporis?
        </span>
    </div>
  )
}

export default Readmore_cons