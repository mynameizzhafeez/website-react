import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import './Blog.css';

import modulesData from '../../data/modules.json';
import notesData from '../../data/notes.json';
import logos from '../../assets/logo-controller';

import Note from '../../components/works/Note';
import Text from '../../components/Text';

function ModulesDesc(props) {
  const { name } = useParams();
  const data = modulesData.modules[name];
  const description = [...data.description];
  description.push(["DATE: " + data.date]);
  description.push(["GRADE: " + data.grade]);

  const notes = data.noNotes ? "" : notesData.notes[name.toUpperCase()].contents.Topics.sublinks.map(link => {
    const note = notesData.notes[link];
    return <Note note={note}/>;
  });

  return (
    <div className="page">
      <img src={logos.nus} alt={data.title} className="icon"></img>
      <br></br>
      <Text
        title={data.code.toUpperCase() + " " + data.title.toUpperCase()}
        content={description}
      ></Text>
      <Text
        title="TIPS"
        content={data.tips}
      ></Text>
      <h2>TOPICS</h2>
      <div className="notes-entries">{notes}</div>
      <Helmet>
        <title>{data.code.toUpperCase()+" Module Review"}</title>
        <meta name="description"
          content={description.slice(0, 150)} />
      </Helmet>
    </div>
  );
}

export default ModulesDesc;