import "./card.css";

interface CardProps {
  avatar: string;
  fullname: string;
  verficationStat: string;
  subject: string;
  para: string;
}

const Card = ({
  avatar,
  fullname,
  verficationStat,
  subject,
  para,
}: CardProps) => {
  return (
    <div className='testi-card'>
      <div className='user-data-container'>
        <div className='user-data_img'>
          <img src={avatar} alt={fullname} />
        </div>
        <div className='user-data_about'>
          <span className='user-name'>{fullname}</span>
          <span className='verification'>{verficationStat}</span>
        </div>
      </div>
      <header>
        <h2>{subject}</h2>
      </header>
      <p>{para}</p>
    </div>
  );
};

export default Card;
