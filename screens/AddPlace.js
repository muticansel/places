import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../utils/database";

const AddPlace = ({ navigation }) => {
  async function createPlaceHandler(place) {
    await insertPlace(place);

    navigation.navigate("AllPlaces", {
      place,
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
