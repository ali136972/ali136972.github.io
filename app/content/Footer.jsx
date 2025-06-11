import footerStyles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={footerStyles.main}>

      <h1 className={`${footerStyles.title}`}>
        <span>AMIRSAM-COMPANY</span>
      </h1>
      
      <p className={footerStyles.description}>
        ContactUs: For contact with Amirsam-company please contact with +989195890547 and Follow me in @AMIRSAM-COMPANY in Instagram,...
        Amirsam-company located In: first Qods street, chaman street, Qods, Tehran. 
      </p>    

      <p className={footerStyles.description}>
          آدرس: تهران، شهرقدس، خیابان چمن، خیابان قدس2،  پلاک 69
          <br />
          تلفن تماس: 09195890547
      </p>   

    </div>
  )
}


