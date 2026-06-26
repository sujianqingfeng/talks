const fs = require('fs');
const { parse } = require('@vue/compiler-dom');
const { parse: parseSFC } = require('@vue/compiler-sfc');
const file = '/tmp/slide16_1__Users_hens_code_space_talks_talks_ai_monthly_report_6_slides_md__slidev_16_md.vue';
let code = fs.readFileSync(file,'utf8').split('\n').slice(1).join('\n');
try { parse(code, {ns:0, getNamespace:()=>0}); console.log('dom ok'); } catch(e){ console.log('dom err', e.message); }
try { parseSFC('<template>\n' + code + '\n</template>', {id:'x'}); console.log('sfc ok'); } catch(e){ console.log('sfc err', e.message); }
