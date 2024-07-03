import { Button } from "@/components/ui/button"
import Men from '@/assets/men.png'
import { futuren, progress } from "@/constants"
import { Card } from "@/components/ui/card"
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"

function Home() {
  return (
<div>
    <div className="w-full h-screen flex items-center mt-20">
      <div className="max-w-xl ml-60 flex h-full flex-col justify-center">
        <h1 className="text-9xl font-semibold uppercase">WORKOUT WITH ME</h1>
        <p className="text-sm text-muted-foreground mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quaerat impedit nostrum 
            aspernatur adipisci, cum cupiditate a possimus consequatur assumenda blanditiis.
        </p>
        <Link to={'/auth'}>
        <Button className="w-fit mt-6 font-bold h-12"size={'lg'}>Join club now</Button>
        </Link>
        <div>
          <h2 className="mt-20 font-bold text-xl">AS FEATURED IN</h2>
          <div className="flex gap-4">
          {futuren.map((Icon, idx) => (
            <Icon key={idx} size={'Icon'} className="w-12 h-12"/>
          ))}
          </div>
        </div>
      </div>
      <img src={Men} alt="men-img" className="w-1/4"/>
    </div>

    <div className="container max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Not sure where to srtart?</h1>
      <p className="mt-2 text-muted-foreground">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eaque maiores eos earum.
      </p>
      <div className="grid grid-cols-3 gap-4 my-8">
        {progress.map(item => (
          <Card key={item.title} className="p-8 relative cursor-pointer group">
            <h3>{item.title}</h3>
            <p>{item.descr}</p>
            
            <Button 
            variant={'ghost'}
            className="absolute right-2 top-1/2 group-hover:translate-x-1 transition-transform">
              <FaArrowRightLong />
            </Button>
            
          </Card>
        ))}
      </div>
    </div>

</div>
  )
}

export default Home
