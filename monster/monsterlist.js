module.exports = {
	monslist: function(message){
        
        message.channel.send('\```Monster list :\n'+'1.  '+'agnaktor\n2.  '+'glacial agnaktor / g. agnaktor'+'\n3.  '+'akantor'+'\n4.  '+'arzuros'+'\n5.  '+'barioth'+'\n6.  '+'sand barioth / s. barioth'+'\n7.  '+'barroth'+'\n8.  '+'Jade Barroth'+'\n9.  '+'Bulldrome'+'\n17. '+'great jaggi / g. jaggi'+'\n20. '+'Nargacuga'+'\n\```');
        message.channel.send('Gunakan \`!mh3rd <nama monster>\` untuk mengetahui data monster');
        console.log('responded')
    }
};