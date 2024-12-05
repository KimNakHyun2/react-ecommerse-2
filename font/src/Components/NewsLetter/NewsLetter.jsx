import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subsribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id'/>
            <button>Subsribe</button>
        </div>
    </div>
  )
}

export default NewsLetter