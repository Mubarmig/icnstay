import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
// import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faNaver } from "@fortawesome/free-brands-svg-icons";
import { faNeos } from "@fortawesome/free-solid-svg-icons";



// npm i --save @fortawesome/free-brands-svg-icons \

function Top () {
  return ( 
    <div className='top'>
      {/* <FontAwesomeIcon icon={faPhoneSquareAlt} /> */}
      <span className>ICN STAY & AIRPORTNSTAY</span><br/>
      <FontAwesomeIcon icon={faWhatsapp} />
      {/* <FontAwesomeIcon icon={faPhoneAlt} /> */}
      <span> +82-10-7159-8205</span><br/>
      <FontAwesomeIcon icon={faInstagram} />
      <a href='https://www.instagram.com/explorekoreawithkelly/' target='_blank'> explorekoreawithkelly</a><br/>
      <FontAwesomeIcon icon={faExternalLinkAlt} />
      {/* <span> https://blog.naver.com/wimh1226</span> */}
      <a href='https://blog.naver.com/wimh1226' target='_blank'> https://blog.naver.com/wimh1226</a>

    </div>
  )
}
export default Top;