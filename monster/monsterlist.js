module.exports = {
	monslist: function(message){
        
        message.channel.send('\```Monster list :\n'+'1.  '+'agnaktor\n2.  '+'glacial agnaktor / g. agnaktor'+'\n3.  '+'akantor'+'\n4.  '+'arzuros'+'\n5.  '+'barioth'+'\n6.  '+'sand barioth / s. barioth'+'\n7.  '+'barroth'+'\n8.  '+'jade barroth / j. barroth'+'\n9.  '+'bulldrome'+'\n10. '+'deviljho'+'\n11. '+'diablos'+'\n12. '+'black diablos'+'\n13. '+'duramboros'+'\n14. '+'giginox'+'\n15. '+'baleful giginox / b. giginox'+'\n16. '+'great baggi / g. baggi'+'\n17. '+'great jaggi / g. jaggi'+'\n18. '+'great wroggi / g. wroggi'+'\n19. '+'lagombi'+'\n20. '+'nargacuga'+'\n21. '+'green nargacuga / g. nargacuga / green narga / g. narga'+'\n\```');
        message.channel.send('Gunakan \`!mh3rd <nama monster>\` atau \`!mhp3rd <nama monster>\` untuk mengetahui data monster');
        console.log('responded')
    }
};