import { Galleria } from "primereact/galleria";
import img1 from './assets/headerimage.jpg'
import dpnw from './assets/deadpool_and_wolverine.jpg'

function App() {

  const coverdata = [
      {
        'title': 'Deadpool & Wolverine',
        'cover': dpnw,
        'slug': 'deadpool_and_wolverine',

      },
      {
          'title': 'Jhone Weak?',
          'cover': img1
      },
      {
          'title': 'Dead Boy By Alive',
          'cover': img1
      },
      {
          'title': 'You Still Alive?',
          'cover': img1
      },
  ]
  const itemTemplate = (item) => {
    return <img className='w-full' src={item.cover} alt={item.slag || item.title} />
  }

  // const itemTemplate = (item) => {
  //   return (
  //       <div className='w-full'>
  //           <img className='w-full' src={item.cover} alt={item.slag || item.title} />
  //           <div className='absolute text-center inset-x-0 flex justify-center bg-gray-100'>
  //               <p>{item.title}</p>           
  //           </div>
  //       </div>
  //   )
  // }
  return (
    <div className="flex justify-center items-centerx">
      <Galleria
        className='w-[400px]'
        value={coverdata}
        autoPlay={true}
        transitionInterval={5000}
        showThumbnails={false}
        showIndicators
        circular
        item={itemTemplate}
      />
    </div>
  );
}

export default App;
