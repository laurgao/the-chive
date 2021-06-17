import UpSEO from "../components/UpSeo";
import TypeIt from "typeit-react";
import Particles from 'react-particles-js';
import { GetServerSideProps } from "next";


export default function Loading() {
  let foo = null;
  if (typeof window !== "undefined") {
    foo = window.localStorage.getItem("foo");
  }
  setTimeout(function(){
    window.location.href = '/home';
  }, 3000);

  return (
    <div className="bg-gray-800 overflow-hidden text-white w-screen h-screen inset-0 absolute z-40 flex items-center ">
      <UpSEO />
      <div className="absolute w-screen h-screen">
        <Particles
      params={{
        "particles": {
            "number": {
                "value": 75
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }} />
      </div>
      
      <div className="max-w-4-xl text-center mx-auto w-full">
            <script>

            </script>
            <TypeIt
              className="text-6xl opacity-50 inline mb-6"
              options={{
                speed: 200,
                strings: [
                  "Loading...",
                ],
                breakLines: false,
              }}
            />
        </div>
      
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  
  
//   await setTimeout(function(){ console.log("moving on"); }, 3000);
  return {props: {}};

  //return {redirect: {permanent: false, destination: "/home",}};
};
