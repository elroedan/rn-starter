import React from "react"
import {View, ScrollView, StyleSheet, Image} from "react-native";

export const images = [
{image: require("../../Images/aardvark_50945952541_o.png"),},
{image: require("../../Images/albatross_50946038257_o.png"),},
{image: require("../../Images/alligator_50945932601_o.png"),},
{image: require("../../Images/anteater_50945239933_o.png"),},
{image: require("../../Images/antelope_50946038027_o.png"),},
{image: require("../../Images/ant_50945239983_o.png"),},
{image: require("../../Images/ape_50945239858_o.png"),},
{image: require("../../Images/armadillo_50945932306_o.png"),},
{image: require("../../Images/baboon_50945239748_o.png"),},
{image: require("../../Images/badger_50946037832_o.png"),},
{image: require("../../Images/barracuda_50945932181_o.png"),},
{image: require("../../Images/bat_50946037732_o.png"),},
{image: require("../../Images/bear_50945932086_o.png"),},
{image: require("../../Images/beaver_50946037702_o.png"),},
{image: require("../../Images/bee_50946037682_o.png"),},
{image: require("../../Images/bison_50945239588_o.png"),},
{image: require("../../Images/boar_50946037622_o.png"),},
{image: require("../../Images/buffalo_50946037617_o.png"),},
{image: require("../../Images/butterfly_50945931911_o.png"),},
{image: require("../../Images/camel_50945931886_o.png"),},
{image: require("../../Images/capybara_50946037492_o.png"),},
{image: require("../../Images/caribou_50946037467_o.png"),},
{image: require("../../Images/cassowary_50945931741_o.png"),},
{image: require("../../Images/caterpillar_50945931676_o.png"),},
{image: require("../../Images/cattle_50945931636_o.png"),},
{image: require("../../Images/cat_50946037377_o.png"),},
{image: require("../../Images/chamois_50946037247_o.png"),},
{image: require("../../Images/cheetah_50946037277_o.png"),},
{image: require("../../Images/chicken_50945239153_o.png"),},
{image: require("../../Images/chimpanzee_50946037197_o.png"),},
{image: require("../../Images/chinchilla_50945931481_o.png"),},
{image: require("../../Images/chough_50945239043_o.png"),},
{image: require("../../Images/clam_50946037137_o.png"),},
{image: require("../../Images/cobra_50945239063_o.png"),},
{image: require("../../Images/cockroach_50945238913_o.png"),},
{image: require("../../Images/cod_50946037037_o.png"),},
{image: require("../../Images/cormorant_50946036987_o.png"),},
{image: require("../../Images/coyote_50946036977_o.png"),},
{image: require("../../Images/crab_50946036937_o.png"),},
{image: require("../../Images/crocodile_50946036822_o.png"),},
{image: require("../../Images/crow_50946036757_o.png"),},
{image: require("../../Images/curlew_50945238538_o.png"),},
{image: require("../../Images/deer_50945238423_o.png"),},
{image: require("../../Images/dinosaur_50946036572_o.png"),},
{image: require("../../Images/dogfish_50945930891_o.png"),},
{image: require("../../Images/dog_50946036532_o.png"),},
{image: require("../../Images/dolphin_50945930851_o.png"),},
{image: require("../../Images/donkey_50945930796_o.png"),},
{image: require("../../Images/dotterel_50945238153_o.png"),},
{image: require("../../Images/dove_50946036352_o.png"),},
{image: require("../../Images/dragonfly_50945238088_o.png"),},
{image: require("../../Images/duck_50945930671_o.png"),},
{image: require("../../Images/dugong_50945930611_o.png"),},
{image: require("../../Images/dunlin_50945237948_o.png"),},
{image: require("../../Images/eagle_50945930556_o.png"),},
{image: require("../../Images/echidna_50945237868_o.png"),},
{image: require("../../Images/eel_50946036082_o.png"),},
{image: require("../../Images/eland_50946036047_o.png"),},
{image: require("../../Images/elephant_50946035972_o.png"),},
{image: require("../../Images/elk_50946035977_o.png"),},
{image: require("../../Images/emu_50946035922_o.png"),},
{image: require("../../Images/falcon_50945930281_o.png"),},
{image: require("../../Images/ferret_50945930246_o.png"),},
{image: require("../../Images/finch_50945930191_o.png"),},
{image: require("../../Images/fish_50945930176_o.png"),},
{image: require("../../Images/flamingo_50945237523_o.png"),},
{image: require("../../Images/fly_50945237508_o.png"),},
{image: require("../../Images/fox_50946035767_o.png"),},
{image: require("../../Images/frog_50945930071_o.png"),},
{image: require("../../Images/gaur_50945930016_o.png"),},
{image: require("../../Images/gazelle_50946035667_o.png"),},
{image: require("../../Images/gerbil_50946035642_o.png"),},
{image: require("../../Images/giraffe_50945929976_o.png"),},
{image: require("../../Images/gnat_50946035607_o.png"),},
{image: require("../../Images/gnu_50945237338_o.png"),},
{image: require("../../Images/goat_50945929861_o.png"),},
{image: require("../../Images/goldfinch_50945237253_o.png"),},
{image: require("../../Images/goldfish_50946035432_o.png"),},
{image: require("../../Images/goose_50946035397_o.png"),},
{image: require("../../Images/gorilla_50945237103_o.png"),},
{image: require("../../Images/goshawk_50945237073_o.png"),},
{image: require("../../Images/grasshopper_50946035322_o.png"),},
{image: require("../../Images/grouse_50945237033_o.png"),},
{image: require("../../Images/guanaco_50946035292_o.png"),},
{image: require("../../Images/gull_50945237003_o.png"),},
{image: require("../../Images/hamster_50945929606_o.png"),},
{image: require("../../Images/hare_50945236978_o.png"),},
{image: require("../../Images/hawk_50946035217_o.png"),},
{image: require("../../Images/hedgehog_50946035187_o.png"),},
{image: require("../../Images/heron_50945929546_o.png"),},
{image: require("../../Images/herring_50945929531_o.png"),},
{image: require("../../Images/hippopotamus_50945929516_o.png"),},
{image: require("../../Images/horse_50946035107_o.png"),},
{image: require("../../Images/human_50945236858_o.png"),},
{image: require("../../Images/hummingbird_50945236833_o.png"),},
{image: require("../../Images/hyena_50945929451_o.png"),},
{image: require("../../Images/ibex_50945929441_o.png"),},
{image: require("../../Images/ibis_50945236758_o.png"),},
{image: require("../../Images/jackal_50946035032_o.png"),},
{image: require("../../Images/jaguar_50945236713_o.png"),},
{image: require("../../Images/jay_50945929326_o.png"),},
{image: require("../../Images/jellyfish_50945929311_o.png"),},
{image: require("../../Images/kangaroo_50946034987_o.png"),},
{image: require("../../Images/kingfisher_50946034962_o.png"),},
{image: require("../../Images/koala_50945929246_o.png"),},
{image: require("../../Images/leopard_50945236523_o.png"),},
{image: require("../../Images/lion_50946034792_o.png"),},
{image: require("../../Images/llama_50945929126_o.png"),},
{image: require("../../Images/lobster_50946034757_o.png"),},
{image: require("../../Images/marten_50945928851_o.png"),},
{image: require("../../Images/mole_50945928726_o.png"),},
{image: require("../../Images/monkey_50946034297_o.png"),},
{image: require("../../Images/moose_50946034247_o.png"),},

{image: require("../../Images/mouse_50946034152_o.png"),},
{image: require("../../Images/octopus_50945235763_o.png"),},
{image: require("../../Images/oryx_50945235658_o.png"),},
{image: require("../../Images/ostrich_50945235513_o.png"),},
{image: require("../../Images/otter_50945928051_o.png"),},
{image: require("../../Images/owl_50946033527_o.png"),},
{image: require("../../Images/panther_50945235253_o.png"),},
{image: require("../../Images/parrot_50946033442_o.png"),},
{image: require("../../Images/penguin_50945927731_o.png"),},
{image: require("../../Images/pigeon_50946033192_o.png"),},
{image: require("../../Images/pig_50946033217_o.png"),},
{image: require("../../Images/pony_50946033167_o.png"),},
{image: require("../../Images/porcupine_50946033092_o.png"),},
{image: require("../../Images/rabbit_50945234653_o.png"),},
{image: require("../../Images/raccoon_50945234608_o.png"),},
{image: require("../../Images/ram_50946032862_o.png"),},
{image: require("../../Images/rat_50946032857_o.png"),},
{image: require("../../Images/red-panda_50946032742_o.png"),},
{image: require("../../Images/reindeer_50945927151_o.png"),},
{image: require("../../Images/rhinoceros_50945927086_o.png"),},
{image: require("../../Images/salamander_50945234433_o.png"),},
{image: require("../../Images/salmon_50945234383_o.png"),},

{image: require("../../Images/scorpion_50945234288_o.png"),},
{image: require("../../Images/seahorse_50945926931_o.png"),},
{image: require("../../Images/seal_50946032437_o.png"),},
{image: require("../../Images/shark_50946032422_o.png"),},
{image: require("../../Images/sheep_50946032407_o.png"),},
{image: require("../../Images/snake_50946032322_o.png"),},
{image: require("../../Images/sparrow_50945234133_o.png"),},
{image: require("../../Images/spider_50945926841_o.png"),},
{image: require("../../Images/squirrel_50945926781_o.png"),},
{image: require("../../Images/swan_50946031962_o.png"),},
{image: require("../../Images/tiger_50946031842_o.png"),},
{image: require("../../Images/toad_50946031787_o.png"),},
{image: require("../../Images/turkey_50945233443_o.png"),},
{image: require("../../Images/turtle_50945926231_o.png"),},
{image: require("../../Images/viper_50945233368_o.png"),},
{image: require("../../Images/vulture_50946031562_o.png"),},
{image: require("../../Images/whale_50945233143_o.png"),},
{image: require("../../Images/wildcat_50946031332_o.png"),},
{image: require("../../Images/wolf_50945233098_o.png"),},
{image: require("../../Images/worm_50946031242_o.png"),},
{image: require("../../Images/yak_50945232978_o.png"),},
{image: require("../../Images/zebra_50946031157_o.png"),}
]

function AnimalImage() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.alphabetContainer}>
        {images.map((item, index) => (
          <Image source={item.image} alt={`Image ${index}`
            }
            style={{width: 150, height:150, marginBottom: 10}}
             />
        ))}
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    alphabetContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    
  });
  
  export default AnimalImage;
