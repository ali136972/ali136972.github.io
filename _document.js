// <!--%%%%%%%%%%******** فایل هایی که در اول اسم آنها از underscore یا (( _ )) استفاده شده است، این فایل ها (یا کامپوننت های جاواسکریپتی)، در سمت سرور یا server side, اجرا می شوند%%%%%%%%%-->

// <!--%%%%%%%%%%******* در زیر منظور از ctx, همان context, می باشد که همان محتویات داخل پیج های مختلف وبسایت می باشد  %%%%%%--->
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document{
  static async getInitialProps(ctx){
    
    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)
      return{...initialProps}

  }


  render(){
    return(
      <html lang="en">
        <Head />

        <body>
          <Main />
            <NextScript />
        </body>

      </html>

    )
          
  }
   
}
  
