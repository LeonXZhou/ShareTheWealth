import { useNavigate} from "react-router-dom";

function Activity() {
    let navigate = useNavigate();
    return (
        <div className="activityContainer">
            <table> 
                <tr>
                    <td style = "width:50%"> <q>Activity Name</q> </td>
                    <td> <q>$0.00</q> </td>
                    <td> <button type="button" onClick={() => {navigate(`/create-event`)}}><i class="fas fa-chevron-circle-down"></i></button> </td>
                </tr>
                <tr>
                    <td style = "width:50%"> <q>Activity Details </q> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td style = "width:50%"> <q>Enter Your Budget</q> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td style = "width:50%"> <q>Activity Details </q> </td>
                    <td> </td>
                    <td> <button type="button" className="btn btn-primary save" onClick={() => {navigate(`/create-event`)}}><q>Save</q></button> </td>
                </tr>
            </table>
        </div>
    );
}
export default Activity;