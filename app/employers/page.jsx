import React, { Suspense } from 'react';
import EmployersList from './EmployersList';
import Loading from '../content/loading';

/* rout parameter, این پارامترها، مثلا: پارامتر داینامیک :id, :name, ... به آخر آدرس روت، اضافه می شوند و کارخاصی را با استفاده از آنها می توانیم انجام دهیم */

/* استفاده از کامپوننت های آماده ی Next js, همانند کومپاننت <Suspense></Suspense>, برای حالت loading..., یک صفحه ی وبسایت، وقتی که یک قسمتی از پیج یا کل پیج وبسایت ما درحال دریافت داده از سرور می باشد*/


export default function Employers() {
  return (
    <main>
      <h1>Employers</h1> 
      <h2>کارمندان شرکت امیرسام</h2> 
      <p> کارمندان شرکت امیرسام ، افرادی تحصیل کرده در مدارج بالای آکادمیک در رشته های مختلف می باشند که دارای تجربیات فراوان در حوزه های تحصیلی خودشان می باشند</p> 

      <Suspense fallback={<Loading />}>
        <EmployersList />
      </Suspense>

    </main>
  )
}

