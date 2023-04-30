const ratingScale = ['1', '2', '3', '4', '5'];
const ratingCriteria = ['Biisi', 'Video/show', 'Erottuvuus'];
const songs = [
  {start: 5500, end: 7700, filename: 'songs/01_Alessandra_-_Queen_Of_Kings_Norway_Official_Music_Video_Eurovision_2023.webm', title: 'Norja - Norway 🇳🇴\nAlessandra - Queen Of Kings', number: '1'},
  {start: 5500, end: 7700, filename: 'songs/02_The_Busker_-_Dance_Our_Own_Party_Malta_Official_Music_Video_Eurovision_2023.webm', title: 'Malta - Malta 🇲🇹\nThe Busker - Dance (Our Own Party)', number: '2'},
  {start: 5500, end: 7700, filename: 'songs/03_Luke_Black_-_Samo_Mi_Se_Spava_Serbia_Official_Music_Video_Eurovision_2023.webm', title: 'Serbia - Serbia 🇷🇸\nLuke Black - Samo Mi Se Spava', number: '3'},
  {start: 5500, end: 7700, filename: 'songs/04_Sudden_Lights_-_Aij_Latvia_Official_Music_Video_Eurovision_2023.webm', title: 'Latvia - Latvia 🇱🇻\nSudden Lights - Aijā', number: '4'},
  {start: 5500, end: 7700, filename: 'songs/05_Mimicat_-_Ai_Coracao_Portugal_Official_Music_Video_Eurovision_2023.webm', title: 'Portugali - Portugal 🇵🇹\nMimicat - Ai Coração', number: '5'},
  {start: 5500, end: 7700, filename: 'songs/06_Wild_Youth_-_We_Are_One_Ireland_Official_Music_Video_Eurovision_2023.webm', title: 'Irlanti - Ireland 🇮🇪\nWild Youth - We Are One', number: '6'},
  {start: 5500, end: 7700, filename: 'songs/07_Let_3_-_Mama_Croatia_Official_Music_Video_Eurovision_2023.webm', title: 'Kroatia - Croatia 🇭🇷\nLet 3 - Mama ŠČ!', number: '7'},
  {start: 5500, end: 7700, filename: 'songs/08_Remo_Forrer_-_Watergun_Switzerland_Official_Music_Video_Eurovision_2023.webm', title: 'Sveitsi - Switzerland 🇨🇭\nRemo Forrer - Watergun', number: '8'},
  {start: 5500, end: 7700, filename: 'songs/09_Noa_Kirel_-_Unicorn_Israel_Official_Music_Video_Eurovision_2023.webm', title: 'Israel - Israel 🇮🇱\nNoa Kirel - Unicorn', number: '9'},
  {start: 5500, end: 7700, filename: 'songs/10_Pasha_Parfeni_-_Soarele_i_Luna_Moldova_Official_Music_Video_Eurovision_2023.webm', title: 'Moldova - Moldova 🇲🇩\nPasha Parfeni - Soarele şi Luna', number: '10'},
  {start: 5500, end: 7700, filename: 'songs/11_Loreen_-_Tattoo_Sweden_Official_Music_Video_Eurovision_2023.webm', title: 'Ruotsi - Sweden 🇸🇪\nLoreen - Tattoo', number: '11'},
  {start: 5500, end: 7700, filename: 'songs/12_TuralTuranX_-_Tell_Me_More_Azerbaijan_Official_Music_Video_Eurovision_2023.webm', title: 'Azerbaidžan - Azerbaijan 🇦🇿\nTuralTuranX - Tell Me More', number: '12'},
  {start: 5500, end: 7700, filename: 'songs/13_Vesna_-_My_Sister_s_Crown_Czechia_Official_Video_Eurovision_2023.webm', title: 'Tšekki - Czechia 🇨🇿\nVesna - My Sister\'s Crown', number: '13'},
  {start: 5500, end: 7700, filename: 'songs/14_Mia_Nicolai_Dion_Cooper_-_Burning_Daylight_Netherlands_Official_Video_Eurovision_2023.webm', title: 'Alankomaat - Netherlands 🇳🇱\nMia Nicolai & Dion Cooper - Burning Daylight', number: '14'},
  {start: 5500, end: 7700, filename: 'songs/15_Kaarija_-_Cha_Cha_Cha_Finland_Official_Music_Video_Eurovision_2023.webm', title: 'Suomi - Finland 🇫🇮\nKäärijä - Cha Cha Cha', number: '15'},
];