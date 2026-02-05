export const project=[
    {
      quantity: 1,
      image: 'img/project/Screenshot 2026-01-31 171108.png',
      name:'E-Commerc',
      describe: 'Show Shopping Cart Functionality , Order Processing , Order Review , Order Tracking',
      link:'https://e-commerc-zeta.vercel.app/',

    },
    {
      quantity: 1,
      image: 'img/project/weather.png',
      name:'Weather',
      describe: 'A weather website calls API from Open Weather 2.5',
      link:'https://weather-sokkong.vercel.app/',

    },
     
]

export const techstack=[

   
]

export function countProject(){
  let quantity = document.querySelector('.js-quantity-project');
  let count = 0;
  project.forEach((item)=>{
    if(item){
      count += item.quantity;
    }
    quantity.innerHTML = count;
  })

}