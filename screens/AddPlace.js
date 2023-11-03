import PlaceForm from "../components/Places/PlaceForm";

const AddPlace = ({ navigation }) => {
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", {
      place,
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
