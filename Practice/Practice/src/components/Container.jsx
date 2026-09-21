import style from './Container.module.css'

const Container= (Props)=>{
 return <div className={style.Container}>{Props.children}</div>
}
export default Container;