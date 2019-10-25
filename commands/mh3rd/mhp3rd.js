module.exports={
    name: "mhp3rd",
    aliases: ["mh3rd", "3rd"],
    category: "monsterhunter3rd",
    description: "Data data monster hunter portable 3rd",
    run: async (client, message, args) => {
        if (!args.length) {
            message.channel.send(`${message.author}, gunakan _command_ \`${prefix.prefix}mh3rd help\` untuk melihat list _command_`);
        } else if (args[0].toLowerCase() === 'data' || args[0].toLowerCase() === 'd'){
                if (args[1].toLowerCase() === 'great'){
                if (args[2].toLowerCase() === 'jaggi'){
                    cmdmon.greatjaggi(message);
                } else if (args[2].toLowerCase() === 'baggi'){
                    cmdmon.greatbaggi(message);
                } else if (args[2].toLowerCase() === 'wroggi'){
                    cmdmon.greatwroggi(message);
                } else { 
                    message.channel.send(`${message.author}, ada 3 monster yang berawalan 'great';\n\`great jaggi, great wrogi,\` dan \`great baggi\``);
                }
            } else if (args[1].toLowerCase() === 'agnaktor'){
                cmdmon.agnaktor(message);
            } else if (args[1].toLowerCase() === 'glacial' ){
                if (args[2].toLowerCase() === 'agnaktor'){
                cmdmon.glacialagnaktor(message);
                }
            } else if (args[1].toLowerCase() === 'g.'){
                if (args[2].toLowerCase() === 'jaggi'){
                    cmdmon.greatjaggi(message);
                } else if (args[2] === 'baggi'){
                    cmdmon.greatbaggi(message);
                } else if (args[2] === 'wroggi'){
                    cmdmon.greatwroggi(message);
                } else if (args[2].toLowerCase() === 'agnaktor'){
                    cmdmon.glacialagnaktor(message);
                } else if (args[2].toLowerCase()=== 'nargacuga' || args[2].toLowerCase() === 'narga'){
                    cmdmon.greennargacuga(message);
                } if (args[2].toLowerCase() === 'rathian'){
                    cmdmon.goldenrathian(message);
                }
            } else if (args[1].toLowerCase() === 'akantor'){
                cmdmon.akantor(message);
            } else if (args[1].toLowerCase() === 'arzuros'){
                cmdmon.arzuros(message);
            } else if (args[1].toLowerCase() === 'barioth'){
                cmdmon.barioth(message);
            } else if (args[1].toLowerCase() === 'sand'){
                if (args[2].toLowerCase() === 'barioth'){
                    cmdmon.sandbarioth(message);
                }
            } else if (args[1].toLowerCase() === 'barroth'){
                cmdmon.barroth(message);
            } else if (args[1].toLowerCase() === 'jade'){
                if (args[2].toLowerCase() === 'barroth'){
                    cmdmon.jadebarroth(message);
                }
            } else if (args[1].toLowerCase() === 'j.'){
                if (args[2].toLowerCase() === 'barroth'){
                    cmdmon.jadebarroth(message);
                } else if (args[2].toLowerCase() === 'mohran'){
                    cmdmon.jhenmohran(message);
                }
            } else if (args[1].toLowerCase() === 'bulldrome'){
                cmdmon.bulldrome(message);
            } else if (args[1].toLowerCase() === 'nargacuga' || args[1].toLowerCase() === 'narga'){
                cmdmon.nargacuga(message);
            } else if (args[1].toLowerCase() === 'deviljho'){
                cmdmon.deviljho(message);
            } else if (args[1].toLowerCase() === 'diablos'){
                cmdmon.diablos(message);
            } else if (args[1].toLowerCase() === 'black'){
                if (args[2].toLowerCase() === 'diablos'){
                    cmdmon.blackdiablos(message);
                } else if (args[2].toLowerCase() === 'tigrex'){
                    cmdmon.brutetigrex(message);
                }
            } else if (args[1].toLowerCase() === 'duramboros'){
                cmdmon.duramboros(message);
            } else if (args[1].toLowerCase() === 'giginox'){
                cmdmon.giginox(message);
            } else if (args[1].toLowerCase() === 'b.'){
                if (args[2].toLowerCase() === 'diablos'){
                    cmdmon.blackdiablos(message);
                } else if (args[2].toLowerCase() === 'giginox'){
                    cmdmon.balefulgiginox(message);
                } else if (args[2].toLowerCase() === 'tigrex'){
                    cmdmon.brutetigrex(message);
                }
            } else if (args[1].toLowerCase() === 'baleful'){
                if (args[2].toLowerCase() === 'giginox'){
                    cmdmon.balefulgiginox(message);
                }
            } else if (args[1].toLowerCase() === 'lagombi'){
                cmdmon.lagombi(message);
            } else if (args[1].toLowerCase() === 'green'){
                if (args[2].toLowerCase() === 'nargacuga' || args[2].toLowerCase() === 'narga'){
                    cmdmon.greennargacuga(message);
                }
            } else if (args[1].toLowerCase() === 'niblesnarf'){
                cmdmon.niblesarf(message);
            } else if (args[1].toLowerCase() === 'qurupeco'){
                cmdmon.qurupeco(message);
            } else if (args[1].toLowerCase() === 'crimson' || args[1].toLowerCase() === 'c.'){
                if (args[2].toLowerCase() === 'qurupeco'){
                    cmdmon.crimsonqurupeco(message);
                }
            } else if (args[1].toLowerCase() === 'rathalos'){
                cmdmon.rathalos(message);
            } else if (args[1].toLowerCase() === 'rathian'){
                cmdmon.rathian(message);
            } else if (args[1].toLowerCase() === 'ukanlos'){
                cmdmon.ukanlos(message);
            } else if (args[1].toLowerCase() === 'tigrex'){
                cmdmon.tigrex(message);
            } else if (args[1].toLowerCase() === 'brute'){
                if (args[2].toLowerCase() === 'tigrex'){
                    cmdmon.brutetigrex(message);
                }
            } else if (args[1].toLowerCase() === 'golden'){
                if (args[2].toLowerCase() === 'rathian'){
                    cmdmon.goldenrathian(message);
                }
            } else if (args[1].toLowerCase() === 'silver'){
                if (args[2].toLowerCase() === 'rathalos'){
                    cmdmon.silverrathalos(message);
                }
            } else if (args[1].toLowerCase() === 's.'){
                if (args[2].toLowerCase() === 'rathalos'){
                    cmdmon.silverrathalos(message);
                } else if (args[2].toLowerCase() === 'barioth'){
                    cmdon.sandbarioth(message);
                } else if (args[2].toLowerCase() === 'uragaan'){
                    cmdmon.steeluragaan(message);
                }
            } else if (args[1].toLowerCase() === 'royal' || args[1].toLowerCase() === 'r.'){
                if (args[2].toLowerCase() === 'ludroth'){
                    cmdmon.royalludroth(message);
                }
            } else if (args[1].toLowerCase() === 'purple' || args[1].toLowerCase() === 'p.'){
                if (args[2].toLowerCase() === 'ludroth'){
                    cmdmon.purpleludroth(message);
                }
            } else if (args[1].toLowerCase() === 'uragaan'){
                cmdmon.uragaan(message);
            } else if (args[1].toLowerCase() === 'volvidon'){
                cmdmon.volvidon(message);
            } else if (args[1].toLowerCase() === 'zinogre'){
                cmdmon.zinogre(message);
            } else if (args[1].toLowerCase() === 'alatreon'){
                cmdmon.alatreon(message);
            } else if (args[1].toLowerCase() === 'amatsu'){
                cmdmon.amatsu(message);
            } else if (args[1].toLowerCase() === 'jhen'){
                if (args[2].toLowerCase() === 'mohran'){
                    cmdmon.jhenmohran(message);
                }
            } else if (args[1].toLowerCase() === 'steel'){
                if (args[2].toLowerCase() === 'uragaan'){
                    cmdmon.steeluragaan(message);
                }
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
        else if (args[0].toLowerCase() === 'keyquest' || args[0].toLowerCase() === 'kq' || args[0].toLowerCase() === 'keyguild' || args[0].toLowerCase() === 'kg'){
            if (args[1].toLowerCase() === 'hr1'){
                cmdguildkey.hr1(message);
            } else if (args[1].toLowerCase() === 'hr2'){
                cmdguildkey.hr2(message);
            } else if (args[1].toLowerCase() === 'hr3'){
                cmdguildkey.hr3(message);
            } else if (args[1].toLowerCase() === 'hr4'){
                cmdguildkey.hr4(message);
            } else if (args[1].toLowerCase() === 'hr5'){
                cmdguildkey.hr5(message);
            } else if (args[1].toLowerCase() === 'hr6'){
                cmdguildkey.hr6(message);
            }
        }
        else if (args[0].toLowerCase() === 'drinkquest' || args[0].toLowerCase() === 'dq' || args[0].toLowerCase() === 'drink'){
            cmddrinkquest.drinkquest(message);
        }
        else if (args[0].toLowerCase() === 'hotspringquest' || args[0].toLowerCase() === 'hsq' || args[0].toLowerCase() === 'hotspring' || args[0].toLowerCase() === 'hsq' || args[0].toLowerCase() === 'spring'){
            cmdhotquest.hotspringquest(message);
        }
        else if (args[0].toLowerCase() === 'help' || args[0].toLowerCase() === 'h'){
            cmdhelp3rd.help(message);
        }
        console.log(prefix.prefix)
    }
}