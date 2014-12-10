# SYNTH SECRETS  
_Original article: [http://www.soundonsound.com/sos/Oct02/articles/synthsecrets10.asp][0]_

Original photo courtesy of Yamaha

![](http://media.soundonsound.com/sos/oct02/images/synthhead.gif)

**Synthesizing Pianos**

**Surely the only convincing synth pianos are sample-based ones? A sound as rich and expressive as that of an acoustic piano is far too complex to be rendered by subtractive synthesis... isn't it? We find out... This is the 42nd article in a 63-part series. Read [all parts][1].**

_**

---

Gordon Reid  
**_

You might think that you'd have to be pretty wrinkly to remember the days when synthesizers were unable to
[![](http://media.soundonsound.com/sos/oct02/images/fig01pianostring.s.gif)][2]

Figure 1: The suspension of a grand piano string.

produce convincing acoustic piano sounds. But do you? Ask yourself, what was the first electronic keyboard capable of sounding like, and responding like, a 'real' piano?

You could go back as far as 1954, and propose the earliest Wurlitzers, or to the mid-'60s, when the Fender Rhodes, Wurlitzer EP200, and Hohner electric pianos first appeared. But let's be honest... despite their electromechanical (as opposed to purely electronic) sound-generating mechanisms, none of these sounds like an acoustic piano. Each exudes _piano-ness_, and you can sometimes use them when a piano would be the preferred instrument, but try to play a Rachmaninoff piano concerto on one and you'll soon discover its limitations.

If you're sneaky, you might s
[![](http://media.soundonsound.com/sos/oct02/images/fig02pianoaction.s.gif)][3]

Figure 2: A simplified representation of a grand piano's mechanism.

uggest the Mellotron, which featured a sampled piano among its more obscure tape frames. I used this on the Mellotron tribute album _Rime Of The Ancient Sampler_, and it fooled many listeners. Nevertheless, the Mellotron is unable to respond to velocity, and imposes its own character on any sound, so that's not an acceptable answer.

For obvious reasons, monophonic synthesizers are not admissible as piano substitutes. Neither, as you will know if you were ever forced to use one, were the host of ghastly electronic pianos of the early '70s. So let's now jump to the introduction of polyphonic synths in 1974\. Hmm... still no good. The Yamaha GX1 couldn't sound like a piano, nor could the Oberheim 4- or 8-Voice. Moving forward another few years, we can also discount the Prophet 5, the OBX, the Jupiter 8, and all of the other big, analogue polysynths of the era. Well then, what of that hyper-expensive late '70s sampler, the Fairlight CMI? Sorry... its memory was too limited to hold and replay a convincing set of piano samples.

Let's move closer to the present, and enter the digital era. As we all know, the Yamaha DX7 was capable of remarkable imitations of _electric_ pianos such as the aforementioned Fender Rhodes, Wurlitzers and Hohners, but even its phenomenal FM synthesis engine was incapable of generating _acoustic_ piano timbres. Then, in 1984, the hyper-expensive sample players cracked it, when the Kurzweil 250 offered the best emulation yet heard --- the famous 'Kurzweil Piano' on which the company's reputation is still based.

Two years later, this became affordable when the Roland HP5600, its stage counterpart the RD1000 (the 'Elton Jo
[![](http://media.soundonsound.com/sos/oct02/images/fig03pluckedstring.s.gif)][4]

Figure 3: A string plucked at its centre has no even harmonics.

hn' piano), and their rackmount sibling, the MKS20, became the first instruments to synthesize a satisfactory piano sound. Based on an early physical modelling concept (although nobody had thought to call it that at the time) they sounded remarkable. But, if the truth is told, their sound generators were still designed using samples.

Even as recently as 1987, no programmable synthesizer had produced a convincing piano sound. Then the Roland D50 introduced what we now know as S&S, or Sample and synthesis, which, for the past 15 years, has been the standard synthesis method across most of the industry. Next came the Korg M1, and some players liked its piano (though I hated it). But the real breakthrough was the Roland U20\. Launched in 1989, its RS-PCM engine was an ancestor of Roland's JV sound engine, and its piano patch was almost as good as those produced by the most powerful samplers of the era. This was remarkable, because the U20 was a cheap, basic sample-replay keyboard with hardly a parameter to its name. But the samples were good, the looping was excellent, and the rudimentary envelopes did the job required of them.

By the dawn of the 1990s, S&S sound generators were _de rigeur_, and piano sounds began to pour forth from every £199 home keyboard. Nowadays, almost every synth offers a piano patch (or 20) and our ears have become so accustomed to them that many people have become unable to distinguish between a real piano and a synthesized imitation. Hang on... that's not true. I should [![](http://media.soundonsound.com/sos/oct02/images/fig04hammeredstring.s.gif)][5]

Figure 4: Hammering the centre of the string prevents the fundamental and other odd harmonics from being generated.

have written that, nowadays, almost every _sample-based_ synth offers a piano patch (or 20). Think of the exceptions... There are no acoustic pianos in the Clavia Nord Modular, the Korg Z1, the Waldorf Q, the Alesis Andromeda, the Novation Supernova II, or any other current synth that foregoes S&S. In fact, there has never been a convincing acoustic piano produced by subtractive synthesis, additive synthesis, or FM synthesis. Only samples appear to do the trick.

We've encountered this situation before. In August 2001's instalment of Synth Secrets (see [www.soundonsound.com/sos/Aug01/articles/synthsecrets28.asp][6]), I pointed out that it's not possible to create authentic-sounding acoustic guitar patches using subtractive synthesis. And therein lies a hint as to the nature of the problem. Sure, a piano hammers its strings rather than plucks them, but the two instruments exhibit some significant similarities. For one thing, piano strings interact with each other in different ways, depending upon their pitches and the number free to vibrate at any [![](http://media.soundonsound.com/sos/oct02/images/fig05unequallengths.s.gif)][7]

Figure 5: Hammering the string at an arbitrary point creates two notes of unrelated pitches (except by accident).

given time, just as happens on a guitar. For another, each piano string interacts with a system that absorbs energy and then directs it back, exciting harmonics that may not be present in the initial waveform, just as happens on a guitar. Furthermore, the piano body and soundboard exhibit many resonances and anti-resonances that we cannot imitate using conventional equalisers or filters, just as on a guitar.

It's not a very encouraging scenario, I'll admit. Nonetheless, this month's task is to develop an understanding of the piano in order to synthesize it as best we can, so we'll start by taking a look at the piano mechanism itself...

**Piano Types**

There are many types of piano, from Granny's unplayable Victorian upright, to the works of art that are the nine-foot grand pianos found in the more expensive concert venues. Most have 88 keys (which is why the largest synths and workstations use this number) although a few have more. This means that a typical piano has a fundamental range of over seven octaves, which is far greater than any other instrument (except for large pipe organs and the extended pianos, which, with their extra keys, reach to eight octaves!) Given that a young, healthy human can hear a range from approximately 20Hz to 20kHz --- which is pretty much equivalent to 10 octaves --- this means that a large piano covers as much as 80 percent of the range of human hearing!

An 88-note grand produces its soun
[![](http://media.soundonsound.com/sos/oct02/images/fig06strings.s.gif)][8]

Figure 6: Imitating the tricord and the short-lived impact of the hammer against the string.

d using 88 hammers that strike nearly 250 strings. However, the natures of these strings differ depending upon where they lie in the range. At the bottom end, single strings are wrapped to high thickness, and the longest of these extend to seven feet or so. Next come notes produced by pairs of wrapped strings, then notes produced by triads (or 'tricords') of wrapped strings, and finally tricords of unwrapped strings, the shortest of which are just a couple of inches long. Given such radical differences in construction, it's not surprising that the tonality as well as the pitch of the piano changes dramatically from one end of the keyboard to the other.

As you can see in Figure 1 (above), the strings are suspended above a soundboard. However, despite being strengthened using struts, the soundboard is not a structural part of the instrument. This is because the pressure exerted by the strings can be as high as 20 tons, which would snap the board in an instant. Consequently, a heavy iron frame is used. Apocryphal stories exist of concert grands falling from a great enough height to cause the frame to collapse. The energy thus released is considerable: a 20-ton explosion is just as destructive whether unleashed by a piano or a briefcase of C4 plastic explosive.

Let's now look at the striking mechanism (see Figure 2 above). When you press a key, a system of levers (which I have shown here in greatly simplified form) causes a hammer to strike the appropriate string(s). If you look at the positions of the pivots and consider the movement of each part of the mechanism, you can see that a small amount of travel on the playing surface of the key translates into a very rapid movement of the hammer head. When this strikes the strin
[![](http://media.soundonsound.com/sos/oct02/images/fig07amplitudeenv.s.gif)][9]

Figure 7: The decay curve of a typical piano note.

g(s), the energy in its movement is converted into vibrational energy in the string(s) themselves. Thus, it appears at first sight that the piano action is similar to the picking action used to play an acoustic guitar. However, it is very different, as I will now show.

**The Waveform**

If you refer back to that August 2001 instalment of Synth Secrets, the one on how guitars produce their sound, you'll recall that, after you pick a guitar string, it vibrates at its fundamental frequency and overtones. I also mentioned that --- because the plucking position cannot be a node of zero displacement --- certain harmonics will be emphasised or eliminated depending upon the plucking position. Figure 3 (below) shows how a pluck in the centre of the string precludes the even-numbered harmonics from the initial spectrum.

Now, consider the piano string, which is not plucked, but hammered. Whereas the position at which a guitar string is plucked determines its _maximum_ displacement, the piano hammer remains in contact with the string long enough to ensure that the position at which the string is struck is a node of _zero_ displacement. If the hammer position were to be halfway along the string, you would, for an instant, have two sections whose lowest pitches lie one octave above the fundamental of the whole string. This means that the funda
[![](http://media.soundonsound.com/sos/oct02/images/fig08envimpact.s.gif)][10]

Figure 8: The decay curve at different hammer velocities.

mental is missing from the resulting sound (see Figure 4, top). Likewise, hammering at the centre will ensure that the sound contains no third harmonic, or fifth, or seventh or ninth... or any of the other odd harmonics, all of which would need to exhibit displacement at this position.

The situation becomes even more complex if the hammer position is _not_ halfway along the string. For example, if you hammer a piano string a third of the way along, you will divide it into two parts, one having a fundamental an octave above the other. But even this is simple compared to the situation where the hammer position is, say, 17.549 percent of the way along the string. As you can appreciate, the two pitches thus produced are unrelated to one another, and both are unrelated to the pitch of the whole string. I have shown the fundamentals of two such sections in Figure 5 (see above).

However, this situation lasts for just a fraction of a second. Soon after the hammer has completed its action, it bounces off the string. The vibrational energy is then free to run along the whole length of the string, and, by a convoluted mechanism of energy transfer, the string begins to vibrate at its fundamental and harmonic frequencies. However, the spectrum of the sound will still depend upon the striking point.

Given this, you would think that, to obtain a consistent tone, piano builders would position the hammers consistently from one end of the keyboard to the other. But this is not the case; you will find them anywhere from one seventh of the way a
[![](http://media.soundonsound.com/sos/oct02/images/fig09envpitch.s.gif)][11]

Figure 9: The decay curve at different pitches.

long the string to about one 15th. This results in different initial frequency relationships, different interactions as the hammer leaves the string, and a different spectrum for the body of each note. What's more, these spectra change considerably when the strings are struck with different velocities, and the changes are not consistent from one end of the piano to the other.

Got a headache yet? Then get this... Most notes are generated by three strings, and it's all but impossible to tune these to the same pitch. You can get very close, to the point where any beating between them is almost undetectable, but the strings will soon become out of phase with one another, such that one string is moving 'up' while another is moving 'down', and so on. This leads to interference, with the strings swapping energy, reinforcing and at other times cancelling each others' modes.

Hmm... it's becoming fairly obvious that we can't fully analyse the vibration(s) in the string(s), but at least we can state how the energy from these vibrations is transmitted through the bridge to the soundboard. Except that we can't. Using different bridges can change the sound of a piano by a remarkable degree, and given that pianos generally have two of them --- one for the treble strings, and one for the bass --- and that they are coupled through the soundboard, we find that even this is too complex for us. What's more, piano soundboards have an irregular shape and are chamfered, so our previous discussions of vibrations in flat plates are, at best, approximations to the way that a s
[![](http://media.soundonsound.com/sos/oct02/images/fig10vca.s.gif)][12]

Figure 10: A simplified architecture that will synthesize the changes shown in Figures 8 and 9\.

oundboard vibrates. All I can tell you in the space I have here is that the modes of soundboards are enharmonic, and the way that they absorb energy from the strings and pass it back is far beyond the scope of Synth Secrets.

So where --- in terms of subtractive synthesis --- do we go from here? Sure, we can use three detuned oscillators to imitate the strings in a tricord, and add a couple more to create the atonal impact (see Figure 6 on the next page). We can even add contour generators and VCAs to crossfade between the two. But we will never be able to synthesize the complex interactions that give the piano its unique character. We could complicate Figure 6 by adding some sort of feedback to modify individual oscillator's waveforms and amplitudes, and this would no doubt generate interesting, organic sounds. But it would not be the same as a piano, and it would not fool you. We don't even know what starting waveform to use for the oscillators!

**Amplitude Response**

Many synths allow you to affect the loudness of a note using velocity sensitivity. And, although a piano's spectral response to changes in velocity can be very complex, its amplitude response is fairly straightforward.

Firstly, we know the general shape of the amplitude envelope for each note. There's an initial impact followed by a slow decay. We also know that if we don't release the note, the tail can linger for tens of seconds, which tells us that the rate of the decay diminishes as the note progresses. This is because, as the pairs and tricords interact, the rate at which energy is transferred to the soundboard (and is thence dissipated into the air) diminishes. I have shown the resulting envelope in Figure 7\.

Of course, the piano has a large dynamic range, so we must make the amplitude contour velocity sensitive, as shown in Figure 8\. What's more, the amplitude curves of low notes decay more slowly than those of high ones, so we should also make the
[![](http://media.soundonsound.com/sos/oct02/images/fig11vcfimpact.s.gif)][13]

Figure 11: Notes hit harder are brighter.

contour sensitive to the note number or pitch CV, so that the decay shortens and maximum gain falls as the note rises (see Figure 9).

We can synthesize this using the architecture in Figure 10 (on the next page), which uses velocity sensitivity and keyboard tracking to affect both the maximum gain of a VCA and the decay rate of the contour that shapes it (in truth, there should be a handful of additional mixers and amplifiers, but I have omitted these for clarity).

**Brightness Response**

Having created a simple model to synthesize the amplitude response, we must now consider the spectra of different piano notes, and how these change in time.

For any given note, we can separate the sound into three distinct stages: the initial hammer blow, the transition period during which the strings begin to oscillate harmonically, and the tail, which is dominated by the fundamental, and whose higher harmonics decay most rapidly.

I have accounted for the first of these sta
[![](http://media.soundonsound.com/sos/oct02/images/fig12vcfpitch.s.gif)][14]

Figure 12: Higher-pitched notes start brighter, but dissipate their energy more quickly.

ges in Figure 6 by adding the two oscillators in the Impact Generator. If both are tuned higher than the note itself, and the AHD contour generator keeps their contribution brief, they will make a suitable 'chink' at the start of the note. For completeness, we could also add a bit of tuned noise to mimic the mechanical clunk that accompanies the hammer blow itself, but I'll leave this to you.

The second stage is much harder to emulate, because it is here that the nature of the waveforms is changing most rapidly. I suppose it's possible that we could invent a synth architecture to imitate this, but I know of nobody who has succeeded, and (even if possible) the block diagram would take up more pages than are left in this month's copy of _Sound On Sound_. We'll simply have to return to this stage later. So let's move to the third stage, which is the simplest to reproduce, requiring (to a first approximation) little more than a contour generator and a low-pass filter.

Experience tells us that piano notes are brighter when hit harder (see Figure 11) so we will need to scale the filter appropriately. Furthermore, piano notes are brighter at high pitches than they are at the low ones. But remember that the high-fre
[![](http://media.soundonsound.com/sos/oct02/images/fig13vcf.s.gif)][15]

Figure 13: The filter response for the tail of the note.

quency energy (indeed, all the energy) of higher-pitched notes is dissipated more rapidly, so we observe the curious result that is Figure 12\.

This means that the filter cutoff frequency must respond to note number (or pitch CV), key velocity, and some form of contour, with the decay rate of the contour responding to the note number (see Figure 13).

If I wanted to complicate matters, I could point out that, for the lowest notes on a grand piano, the fundamental pitch has very low amplitude, and the note that you _think_ you hear is to some extent implied by the harmonics. This suggests that we require a high-pass filter for the lowest notes in our synthesized sound. But I think we should ignore this. There's only so far we can go before we reach the point of diminishing returns, adding complexity for little extra benefit.

**Tuning**

Next, we must turn to the subject of tuning. I mentioned in that instalment on the physics of the acoustic guitar that a string's harmonics are _stretched_ as the pitch increases and/or the excitation increases in amplitude. This is because the string requires a finite length in which to bend over the bridge and nut, thus shortening the effective length. Not particularly important at the fundamental frequency, this becomes more significant at higher harmonic numbers, and stretches the harmonic series from 1:2:3:4:5:6... to something that may look more like 1:2:3:4.01:5.02:6.04... and so on (don't take these numbers too seriously; I just made them up to illustrate the point).

This _stretching_ of the harmonic series has far greater consequences on a piano than a guitar because, on the piano, we are able to play chords reaching across seven o
[![](http://media.soundonsound.com/sos/oct02/images/fig14stretchedtuning.s.gif)][16]

Figure 14: Stretching the keyboard CVs.

ctaves. If you play a concert-pitch 'A' on a piano (440Hz) simultaneously with the 'A' two octaves above, the frequency of the fourth harmonic of A440 should be equal to the fundamental of the upper 'A'. However, because A440 exhibits stretched harmonics, the upper 'A' will, if tuned to 1760Hz, sound a fraction flat! Indeed, the human ear/brain is so accustomed to this that a perfectly tuned piano not only sounds out of tune, it sounds dull. A stretched tuning system makes the overall sound 'sweeter' to our ears, and we need to imitate this. We do this by making the oscillators track the keyboard at a ratio just a fraction greater than 1:1\. We can do this by placing a near-unity amplifier in the pitch CV path (see Figure 14, right).

**Putting It All Together**

If I now combine all the elements discussed above into a single patch (see Figure 15, below), you can see that it's a biggie which exceeds the capabilities of most synths --- even without a complex oscillator section to recreate the authentic piano tone! And, even when carefully programmed on a large modular synth, it sounds like a Wurlitzer or Pianet. It does _not_ sound like a Bösendorfer.

This is hardly surprising, and it would still be the case even if we modelled the hammers and strings perfectly. This is because we have totally overlooked the resonances of the soundboard and the glorious reverberant effects of the piano body itself.

What's more, we haven't even touched upon complicating factors such as the action of the pedals. The most important of these is the right-hand 'sustain' pedal, which lifts the
[![](http://media.soundonsound.com/sos/oct02/images/fig15pianopatch.s.gif)][17]

Figure 15: Trying to create a piano sound using a realistic number of modules. 

dampers so that all the strings can vibrate simultaneously. If you strike a single note with this pedal depressed, the hammer excites the strings that produce that note, but the energy then passes through the bridge and soundboard to excite other strings. Some will vibrate _sympathetically_, because they share modes of vibration with the initial note, while others will not. However, after a few fractions of a second, the interactions of the strings, the soundboard, and the bridge become so complex that it is impossible to calculate which strings will be vibrating and with what amplitudes, spectra and phases. The sound thus produced is extremely complex and is, for obvious reasons, called _sympathetic resonance_.

So... is it impossible to create an acoustic piano patch on an analogue synth? The strict answer is 'yes', but as someone who performed for a couple of years using a 76-note analogue polysynth as a stage piano, I have to admit that the situation is not as gloomy as it seems. Sure, the patch I used would never fool you into thinking that you were listening to a real piano, but, like the Fender Rhodes, Wurlitzers and Hohners mentioned at the start of this article, it was piano-like, and useable for rock and roll. The polysynth in question was the Roland Super JX10, and next month, I'll show you how it managed it. [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][18]

**This is the 42nd article in a 63-part series. Read [all parts][1].**

[Published in SOS October 2002][19]

[0]: http://www.soundonsound.com/sos/Oct02/articles/synthsecrets10.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/oct02/images/fig01pianostring.l.gif
[3]: http://media.soundonsound.com/sos/oct02/images/fig02pianoaction.l.gif
[4]: http://media.soundonsound.com/sos/oct02/images/fig03pluckedstring.l.gif
[5]: http://media.soundonsound.com/sos/oct02/images/fig04hammeredstring.l.gif
[6]: www.soundonsound.com/sos/Aug01/articles/synthsecrets28.asp
[7]: http://media.soundonsound.com/sos/oct02/images/fig05unequallengths.l.gif
[8]: http://media.soundonsound.com/sos/oct02/images/fig06strings.l.gif
[9]: http://media.soundonsound.com/sos/oct02/images/fig07amplitudeenv.l.gif
[10]: http://media.soundonsound.com/sos/oct02/images/fig08envimpact.l.gif
[11]: http://media.soundonsound.com/sos/oct02/images/fig09envpitch.l.gif
[12]: http://media.soundonsound.com/sos/oct02/images/fig10vca.l.gif
[13]: http://media.soundonsound.com/sos/oct02/images/fig11vcfimpact.l.gif
[14]: http://media.soundonsound.com/sos/oct02/images/fig12vcfpitch.l.gif
[15]: http://media.soundonsound.com/sos/oct02/images/fig13vcf.l.gif
[16]: http://media.soundonsound.com/sos/oct02/images/fig14stretchedtuning.l.gif
[17]: http://media.soundonsound.com/sos/oct02/images/fig15pianopatch.l.gif
[18]: http://www.soundonsound.com
[19]: http://www.soundonsound.com/Contents.php?Month=10&Year=2002