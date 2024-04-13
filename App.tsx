import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text style={{marginBottom:10}}>Hello Martin Esteban</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "gold",
          borderRadius: 100,
        }}
      ></View>
      <BoxME bgColor="blue"/>
      <BoxME bgColor="red" borderColor="#CDCDCD"/>
      <BoxME bgColor="orange" borderColor="black"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "olive",
    alignItems: "center",
    justifyContent: "center",
  },
});

interface IBoxMe {
  bgColor: string;
  borderColor?: 'blue' | 'black' | 'purple' | '#CDCDCD';

}

const BoxME = (props: IBoxMe) => {
  const {bgColor, borderColor = 'pink'} = props;
  return (
    <View
      style={{
        marginTop: 10,
        width: 100,
        height: 100,
        backgroundColor: bgColor,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: borderColor,
      }}
    ></View>
  );
};

/* 
Para poder usar Typescript en sus proyectos ya hechos, pueden hacer lo siguiente. 1. Ejecutan la siguiente línea en la terminal (estando en su proyecto) {  "extends": "@tsconfig/react-native/tsconfig.json"} `yarn add --dev @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript` ```js yarn add --dev @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript ```2. Agregan en el directorio raíz el archivo **'tsconfig.json'** y luego ponen lo siguiente```js { "extends": "@tsconfig/react-native/tsconfig.json" } ```
*/
