import UpSEO from "../components/UpSeo";
import TypeIt from "typeit-react";
import SecondaryButton from "../components/SecondaryButton";
import { FaArrowRight } from "react-icons/fa"
import Particles from 'react-particles-js';

export default function Home() {
  return (
    <div className="bg-gray-800 overflow-hidden text-white w-screen h-screen inset-0 absolute z-40 flex items-center " style={{backgroundImage: 'url("/bg-dim-25.png")'}}>
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
      
        <p className="text-6xl opacity-70 px-10 mb-6">The Chive</p>
          <div className="text-xl opacity-50 inline mb-6">
            <p className="text-xl opacity-50"></p>
            <TypeIt
              className="text-xl opacity-50 inline mb-6"
              options={{
                speed: 200,
                loop:true,
                strings: [
                  "Canada's Finest Daily Dose of Writing",
                  "Canada's Finest News Source",
                  "Canada's Finest Literary Theory",
                  "Canada's Finest Marxist Analysis",
                  "Canada's Finest Feminist Critics",
                ],
                breakLines: false,
              }}
            />
          </div>

        <div className="max-w-xs mx-auto mt-6">
          <SecondaryButton href="/loading">
            <>
              <p className="uppercase mr-2 mt-1">Enter</p>
              <FaArrowRight />
            </>
          </SecondaryButton>
        </div>
      </div>
      
    </div>
  )
}

