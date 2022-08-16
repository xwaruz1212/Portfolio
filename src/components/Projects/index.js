import {
    faCss3,
    faHtml5,
    faJsSquare,
    faReact,
    faSass
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import PixiJs from '../../assets/images/Pixi.png'
  import './index.scss'

const Experience = () => {
    return (
        <>
            <div className='page-cont'>
                <h1 className='text'>
                    Experience
                </h1>
                <div className='icons'>
                    <div className='one'><FontAwesomeIcon icon={faReact}/>
                    <div className='overlay'>
                        <p className='p-text'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Eligendi eaque facere numquam natus nisi. 
                            Commodi doloremque explicabo laborum, fugiat enim, soluta possimus, 
                            natus dolore blanditiis magni vel. Nemo, hic harum.
                        </p>
                    </div>
                    </div>
                    <div className='two'><FontAwesomeIcon icon={faJsSquare}/>
                    <div className='overlay'>
                        <p className='p-text'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo alias possimus quasi aut iusto quod quas assumenda atque amet, sapiente nobis aspernatur animi. Porro, voluptates. Obcaecati, quae. Reiciendis, pariatur quibusdam?
                        </p>
                    </div>
                    </div>
                    <div className='three'><FontAwesomeIcon icon={faHtml5}/>
                    <div className='overlay'>
                        <p className='p-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, facere ipsum fugiat vero facilis placeat enim, consequatur commodi mollitia ut nulla hic dignissimos earum ipsa repellat qui nostrum sed quisquam?
                        </p>
                    </div>
                    </div>
                    <br />
                    <div className='four'><FontAwesomeIcon icon={faCss3}/>
                    <div className='overlay'>
                        <p className='p-text'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas nobis a dolores ea asperiores. Tempore voluptates animi facere nesciunt quisquam fugit omnis ipsam placeat, rem nihil sunt necessitatibus impedit. Itaque.
                        </p>
                    </div>
                    </div>
                    <div className='five'><FontAwesomeIcon icon={faSass}/>
                    <div className='overlay'>
                        <p className='p-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis odio magni quibusdam, quia, illum, quidem possimus aspernatur tempore in illo sed molestiae rerum maxime dolore. Ea nemo sequi dignissimos.
                        </p>
                    </div>
                    </div>
                    <div className='six'><img src={PixiJs} alt="" />
                    <div className='overlay'>
                        <p className='p-text'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa itaque, beatae ex esse ipsum doloremque cupiditate magni obcaecati explicabo, molestias deleniti maxime dolore eligendi cum quam, est ab quaerat quidem?
                        </p>
                    </div>
                    </div>
                </div>
            
            </div> 
        </>
        
    );
}
 
export default Experience;