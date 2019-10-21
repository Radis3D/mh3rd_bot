module.exports={
    name: "mhp3rd",
    aliases: ["mh3rd", "3rd"],
    category: "monsterhunter3rd",
    description: "Data data monster hunter portable 3rd",
    run: async (client, message, args) => {
        if (!args.length) {
            message.channel.send(`${message.author}, gunakan _command_ \`${prefix.prefix}mh3rd <nama monster>\` atau \`${prefix.prefix}mhp3rd <nama monster>\` untuk mendapatkan data monster`);
        } else if (args[0].toLowerCase() === 'great'){
            if (args[1].toLowerCase() === 'jaggi'){
                cmdmon.greatjaggi(message);
            } else if (args[1].toLowerCase() === 'baggi'){
                cmdmon.greatbaggi(message);
            } else if (args[1].toLowerCase() === 'wroggi'){
                cmdmon.greatwroggi(message);
            } else { 
                message.channel.send(`${message.author}, ada 3 monster yang berawalan 'great';\n\`great jaggi, great wrogi,\` dan \`great baggi\``);
            }
        } else if (args[0].toLowerCase() === 'agnaktor'){
            cmdmon.agnaktor(message);
        } else if (args[0].toLowerCase() === 'glacial' ){
            if (args[1].toLowerCase() === 'agnaktor'){
            cmdmon.glacialagnaktor(message);
            }
        } else if (args[0].toLowerCase() === 'g.'){
            if (args[1].toLowerCase() === 'jaggi'){
                cmdmon.greatjaggi(message);
            } else if (args[1] === 'baggi'){
                cmdmon.greatbaggi(message);
            } else if (args[1] === 'wroggi'){
                cmdmon.greatwroggi(message);
            } else if (args[1].toLowerCase() === 'agnaktor'){
                cmdmon.glacialagnaktor(message);
            } else if (args[1].toLowerCase()=== 'nargacuga' || args[1].toLowerCase() === 'narga'){
                cmdmon.greennargacuga(message);
            } if (args[1].toLowerCase() === 'rathian'){
                cmdmon.goldenrathian(message);
            }
        } else if (args[0].toLowerCase() === 'akantor'){
            cmdmon.akantor(message);
        } else if (args[0].toLowerCase() === 'arzuros'){
            cmdmon.arzuros(message);
        } else if (args[0].toLowerCase() === 'barioth'){
            cmdmon.barioth(message);
        } else if (args[0].toLowerCase() === 'sand'){
            if (args[1].toLowerCase() === 'barioth'){
                cmdmon.sandbarioth(message);
            }
        } else if (args[0].toLowerCase() === 'barroth'){
            cmdmon.barroth(message);
        } else if (args[0].toLowerCase() === 'jade'){
            if (args[1].toLowerCase() === 'barroth'){
                cmdmon.jadebarroth(message);
            }
        } else if (args[0].toLowerCase() === 'j.'){
            if (args[1].toLowerCase() === 'barroth'){
                cmdmon.jadebarroth(message);
            } else if (args[1].toLowerCase() === 'mohran'){
                cmdmon.jhenmohran(message);
            }
        } else if (args[0].toLowerCase() === 'bulldrome'){
            cmdmon.bulldrome(message);
        } else if (args[0].toLowerCase() === 'nargacuga' || args[0].toLowerCase() === 'narga'){
            cmdmon.nargacuga(message);
        } else if (args[0].toLowerCase() === 'deviljho'){
            cmdmon.deviljho(message);
        } else if (args[0].toLowerCase() === 'diablos'){
            cmdmon.diablos(message);
        } else if (args[0].toLowerCase() === 'black'){
			if (args[1].toLowerCase() === 'diablos'){
                cmdmon.blackdiablos(message);
            }
        } else if (args[0].toLowerCase() === 'duramboros'){
            cmdmon.duramboros(message);
        } else if (args[0].toLowerCase() === 'giginox'){
            cmdmon.giginox(message);
        } else if (args[0].toLowerCase() === 'b.'){
            if (args[1].toLowerCase() === 'diablos'){
                cmdmon.blackdiablos(message);
            } else if (args[1].toLowerCase() === 'giginox'){
                cmdmon.balefulgiginox(message);
            } else if (args[1].toLowerCase() === 'tigrex'){
                cmdmon.brutetigrex(message);
            }
        } else if (args[0].toLowerCase() === 'baleful'){
			if (args[1].toLowerCase() === 'giginox'){
                cmdmon.balefulgiginox(message);
            }
        } else if (args[0].toLowerCase() === 'lagombi'){
            cmdmon.lagombi(message);
        } else if (args[0].toLowerCase() === 'green'){
			if (args[1].toLowerCase() === 'nargacuga' || args[1].toLowerCase() === 'narga'){
                cmdmon.greennargacuga(message);
            }
        } else if (args[0].toLowerCase() === 'niblesnarf'){
            cmdmon.niblesarf(message);
        } else if (args[0].toLowerCase() === 'qurupeco'){
            cmdmon.qurupeco(message);
        } else if (args[0].toLowerCase() === 'crimson' || args[0].toLowerCase() === 'c.'){
			if (args[1].toLowerCase() === 'qurupeco'){
                cmdmon.crimsonqurupeco(message);
            }
        } else if (args[0].toLowerCase() === 'rathalos'){
            cmdmon.rathalos(message);
        } else if (args[0].toLowerCase() === 'rathian'){
            cmdmon.rathian(message);
        } else if (args[0].toLowerCase() === 'ukanlos'){
            cmdmon.ukanlos(message);
        } else if (args[0].toLowerCase() === 'tigrex'){
            cmdmon.tigrex(message);
        } else if (args[0].toLowerCase() === 'brute'){
			if (args[1].toLowerCase() === 'tigrex'){
                cmdmon.brutetigrex(message);
            }
        } else if (args[0].toLowerCase() === 'golden'){
			if (args[1].toLowerCase() === 'rathian'){
                cmdmon.goldenrathian(message);
            }
        } else if (args[0].toLowerCase() === 'silver'){
			if (args[1].toLowerCase() === 'rathalos'){
                cmdmon.silverrathalos(message);
            }
        } else if (args[0].toLowerCase() === 's.'){
			if (args[1].toLowerCase() === 'rathalos'){
                cmdmon.silverrathalos(message);
            } else if (args[1].toLowerCase() === 'barioth'){
                cmdon.sandbarioth(message);
            } else if (args[1].toLowerCase() === 'uragaan'){
                cmdmon.steeluragaan(message);
            }
        } else if (args[0].toLowerCase() === 'royal' || args[0].toLowerCase() === 'r.'){
			if (args[1].toLowerCase() === 'ludroth'){
                cmdmon.royalludroth(message);
            }
        } else if (args[0].toLowerCase() === 'purple' || args[0].toLowerCase() === 'p.'){
			if (args[1].toLowerCase() === 'ludroth'){
                cmdmon.purpleludroth(message);
            }
        } else if (args[0].toLowerCase() === 'uragaan'){
            cmdmon.uragaan(message);
        } else if (args[0].toLowerCase() === 'volvidon'){
            cmdmon.volvidon(message);
        } else if (args[0].toLowerCase() === 'zinogre'){
            cmdmon.zinogre(message);
        } else if (args[0].toLowerCase() === 'alatreon'){
            cmdmon.alatreon(message);
        } else if (args[0].toLowerCase() === 'amatsu'){
            cmdmon.amatsu(message);
        } else if (args[0].toLowerCase() === 'jhen'){
			if (args[1].toLowerCase() === 'mohran'){
                cmdmon.jhenmohran(message);
            }
        } else if (args[0].toLowerCase() === 'steel'){
			if (args[1].toLowerCase() === 'uragaan'){
                cmdmon.steeluragaan(message);
            }
        }
        else if (args[0].toLowerCase() === 'monlist' || args[0].toLowerCase() === 'monslist'){
            cmdmonlist.monslist(message);
            //break;
        } else if (args[0].toLowerCase() === 'monster'){
            if (args[1].toLowerCase() === 'list'){
            cmdmonlist.monslist(message);
            //break;
            }
        }
        else if (args[0].toLowerCase() === 'keyquest' || args[0].toLowerCase() === 'kq' | args[0].toLowerCase() === 'keyguild' || args[0].toLowerCase() === 'kg'){
            if (args[1].toLowerCase() === 'hr1'){
                cmdguildkey.hr1(message);
            } else if (args[1].toLowerCase() === 'hr2'){
                cmdguildkey.hr2(message);
            } else if (args[1].toLowerCase() === 'hr3'){
                cmdguildkey.hr3(message);
            } else if (args[1].toLowerCase() === 'hr4'){
                cmdguildkey.hr4(message);
            } else if (args[1].toLowerCase() === 'hr5'){
                //cmdguildkey.hr5(message);
            } else if (args[1].toLowerCase() === 'hr6'){
                //cmdguildkey.hr6(message);
            }
        }
        
        console.log(prefix.prefix)
    }
}