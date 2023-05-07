import { getImageUrl } from './utils.js';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        url ={getImageUrl('szV5sdG')}
        profession = "geochemist"
        akward = " (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discoveries = " polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        url ={getImageUrl('YfeOqp2')}
        profession = "geochemist"
        akward = "(Miyake Prize for geochemistry, Tanaka Prize)"
        discoveries = "a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}

function Profile (props){
    return(
        <section className="profile">
            <h2>{props.name}</h2>
            <img
            className="avatar"
            src={props.url}
            alt={props.name}
            width={70}
            height={70}
            />
            <ul>
            <li>
                <b>Profession: </b> 
                {props.profesion}
            </li>
            <li>
                <b>Awards: 2 </b> 
                {props.akward}
            </li>
            <li>
                <b>Discovered: </b>
                {props.discoveries }
            </li>
            </ul>
     </section>
  )

}