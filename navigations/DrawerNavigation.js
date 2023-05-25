import { createDrawerNavigator } from '@react-navigation/drawer'
import BottonNav from "../navigations/BottomTabNavigation";
import LocacionesScreen from "../screens/LocacionesScreen"
import ItemScreen from "../screens/ItemScreen"
import RegionesScreen from "../screens/RegionesScreen"
import VersionesScreen from "../screens/VersionesScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Pokemon's" component={BottonNav} options={{ headerTitle: '' }} />
            <Drawer.Screen name="Regiones" component={RegionesScreen} />
            <Drawer.Screen name="Locaciones" component={LocacionesScreen} />
            <Drawer.Screen name="Item's" component={ItemScreen} />
            <Drawer.Screen name="Versiones de juegos" component={VersionesScreen} />
        </Drawer.Navigator>
    )
}