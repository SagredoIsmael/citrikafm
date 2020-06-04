import * as React from 'react'
import { DrawerItem } from '@react-navigation/drawer'
import { StyleSheet, View } from 'react-native'
import map from 'lodash/map'
import colors from '../../constants/colors'
import { sizeNormalize } from '../../constants/layout'
import Icon from '../UI/Icon'
import { screens } from '../../constants/navigation'
import constants from '../../constants/fetch'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'


const { MAIN, EVENTS, DEEJAYS, CONTACT, LEGAL } = screens

const drawerItems = [
    {
        label: MAIN,
        icon: () => <AntDesign color={colors.white} size={sizeNormalize(30)} name={'home'}/>
    },
    {
        label: EVENTS,
        icon: () => <Feather color={colors.white} size={sizeNormalize(30)} name={'calendar'}/>
    },
    {
        label: DEEJAYS,
        icon: () => <Feather color={colors.white} size={sizeNormalize(30)} name={'sliders'}/>
    },
    {
        label: CONTACT,
        icon: () => <AntDesign color={colors.white} size={sizeNormalize(30)} name={'mail'}/>
    },
    {
        label: LEGAL,
        icon: () => <Feather color={colors.white} size={sizeNormalize(30)} name={'file-text'}/>
    }
]

export default ({ navigation }) =>
    <View style={styles.drawerContainer}>
        <View>
            {map(drawerItems, drawerItem =>
                <DrawerItem 
                    key={drawerItem.label}
                    onPress={() => navigation.navigate(drawerItem.label)}
                    labelStyle={styles.labelDrawer}
                    style={styles.drawerItem}
        
                    {...drawerItem} />
            )}
        </View>
        <View style={styles.socialDrawerItem}>
            <Icon onPress={() => window.open(constants.INSTAGRAM,'_blank')} name={'logo-instagram'} color={colors.white} size={30} />
            <Icon onPress={() => window.open(constants.FACEBOOK,'_blank')} name={'logo-facebook'} color={colors.white} size={30} />
            <Icon onPress={() => window.open(constants.TWITTER,'_blank')} name={'logo-twitter'} color={colors.white} size={30} />
        </View>
    </View>


const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: 'space-between',
        padding: '7%'
    },
    labelDrawer: {
        color: colors.white,
        fontSize: sizeNormalize(18)
    },
    drawerItem: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        paddingTop:'8%',
    },
    socialDrawerItem: {
        margin:'15%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})