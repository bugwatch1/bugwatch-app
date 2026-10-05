import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const symptoms = [
  {name:'Fever', trend:'↑ Increasing'},
  {name:'Cough', trend:'↑ Increasing'},
  {name:'Vomiting', trend:'→ Stable'},
];

export default function Home(){
  return <SafeAreaView style={s.safe}><StatusBar style="dark"/><ScrollView contentContainerStyle={s.page}>
    <Text style={s.brand}>BugWatch</Text>
    <Text style={s.kicker}>COMMUNITY PULSE</Text>
    <View style={s.hero}><Text style={s.level}>MODERATE</Text><Text style={s.title}>Illness activity near you</Text><Text style={s.body}>Community symptom reports are moderately elevated. Trends are anonymous and aggregated.</Text></View>
    <Text style={s.section}>Trending symptoms</Text>
    {symptoms.map(x=><View key={x.name} style={s.card}><Text style={s.symptom}>{x.name}</Text><Text style={s.trend}>{x.trend}</Text></View>)}
    <TouchableOpacity style={s.button}><Text style={s.buttonText}>Report symptoms anonymously</Text></TouchableOpacity>
    <Text style={s.privacy}>No names • No exact locations • Community trends only</Text>
  </ScrollView></SafeAreaView>;
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#F7FAF8'},page:{padding:22,gap:14},brand:{fontSize:30,fontWeight:'800',color:'#143D3B'},kicker:{fontSize:12,fontWeight:'700',letterSpacing:1.6,color:'#58706D'},hero:{backgroundColor:'#DFF1E7',padding:22,borderRadius:24,gap:8},level:{fontSize:13,fontWeight:'800',color:'#A46618'},title:{fontSize:25,fontWeight:'800',color:'#143D3B'},body:{fontSize:15,lineHeight:22,color:'#435C59'},section:{fontSize:19,fontWeight:'800',color:'#143D3B',marginTop:8},card:{backgroundColor:'#FFFFFF',padding:18,borderRadius:18,flexDirection:'row',justifyContent:'space-between'},symptom:{fontSize:17,fontWeight:'700',color:'#143D3B'},trend:{fontSize:14,color:'#A46618'},button:{backgroundColor:'#143D3B',padding:18,borderRadius:18,marginTop:8},buttonText:{textAlign:'center',fontWeight:'800',color:'#FFFFFF',fontSize:16},privacy:{textAlign:'center',fontSize:12,color:'#6B7E7B',marginTop:2}});
