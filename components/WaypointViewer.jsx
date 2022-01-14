import Waypoint from './waypoint'
import gender from '../gender.json'
import {useRouter} from 'next/router'
import { VarsProvider } from '../modules/varsContext'
export default function WaypointViewer(){
  const router = useRouter()
  const {id} = router.query
  let search_id = 0;
  let waypoint;
  if(id !== 'root' && id !== undefined){
    search_id = Number(id);
    waypoint = gender.waypoints.find(function(wp){
      console.log(wp);
      return wp.id_number === search_id;
    });
  } else {
    waypoint = gender.waypoints[0];
  }
  return (
    <VarsProvider value={gender.variables} >
      <Waypoint blocks={waypoint.blocks} />
    </VarsProvider>
  );
}