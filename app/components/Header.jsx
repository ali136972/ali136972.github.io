import headerStyles from '../styles/Header.module.css';


export default function Header() {
  return (
    <div className={headerStyles.main}>

      <h1 className={`${headerStyles.title}`}>
        <span>AMIRSAM-COMPANY</span>
      </h1>

      <p className={headerStyles.description}>
        Amirsam-company is once of the best HighTech Industrial Iranian Persian Company That made Diffrent Type of Product Like Full Atomatic Welding & Winding Robots, Olive Pitting & Slicing Machine, Linear particle Accolator, Powder Coating Machines Cascades,... 
      </p>      

    </div>
  )
}


