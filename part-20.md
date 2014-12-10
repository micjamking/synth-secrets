# Synth Secrets, Part 20: Introducing Polyphony  
_Original article: [http://www.soundonsound.com/sos/dec00/articles/synthsec.asp][0]_

Having explored the way monophonic and duophonic analogue keyboards work, **Gordon Reid** puts away his Minimoog and Odyssey and descends into the complex world of polyphonic synths to a flourish of complex jazz chords. This is the 20th article in a 63-part series. Read [all parts][1].

"Just like human beings, sounds are born, reach their prime, and die; but the life of a sound, from creation to evanescence, lasts only a few seconds."

_...taken from my Yamaha GX1 manual, 1975\._

[![](http://media.soundonsound.com/sos/dec00/images/synth1_4s.gif)][2]Ah, polyphony. You wouldn't think that there's much to it, would you? After all, we were all brought up with out-of-tune Edwardian pianos, Bontempi organs, five-string acoustic guitars, and whatever else lurked unloved behind the sofa in the living room. You hit a note... it went 'boiinnggg'. You hit another note... it too went 'boiinnggg'. It must be the same on a synthesizer, yes? Well, no, otherwise I wouldn't have asked.

Before we can analyse and judge the various ways in which synthesizers have achieved polyphony, we had better understand precisely what 'polyphony' is. So I'll let you into a secret right away... just because an electronic instrument can play many pitches simultaneously, it isn't necessarily truly polyphonic.

**Uhh...?**

Let's remind ourselves of what happens when, for example, you hit a strike a string within grandma's piano or pluck a string on an acoustic guitar. As we learned in the very first part of this series, the sound thus produced will have a characteristic tone determined by the nature of the string, and it will vibrate at a particular set of pitches determined by its length and tension. Of course, this isn't the end of the story. Percussive instruments such as these are loudest at the start of a note and, unless damped, their sounds die away to silence over the course of several seconds. Furthermore, the note is brighter (ie. contains more high-frequency harmonics) at its start than it is at its end. In addition to this, many such sounds fluctuate in some way, exhibiting modulations such as vibrato.

Numerous other factors determine the exact sound produced, so it's both surprising and comforting to know that we can reduce these factors down to three major attributes for many simpler timbres. The first of these is the principal waveform, which provides both the initial tone and the pitch. The second and third are the changes in brightness and loudness as the note progresses. Given this, we can design a simple, monophonic synthesizer, as shown in Figure 1 above.

This has an oscillator that creates the basic waveform, a filter that controls the tone, and an amplifier that controls the loudness. A contour generator determines how the filter and amplifier modify the sound as it develops over time, and the modulator adds vibrato, tremolo and/or growl. It's a very elegant design and -- if the oscillator offers at least two or three initial waveforms -- it will produce a huge range of imitative and 'electronic' sounds. Correctly set up, it may even provide passable imitations of our hammered and plucked strings.

Of course, by virtue of its single oscillator, the synthesizer in Figure 1 is capable only of producing one pitch at any given moment. Therefore, as I showed in part 18 of this series, back in October, its response to multiple notes is to play just one at a time, as determined by the key priority (see Figure 2, right). Clearly, no matter how many keys you press simultaneously, this can never be a polyphonic instrument.

Let's now return to our initial consideration of a piano or acoustic guitar. Imagine that you play a single note -- say, middle C -- and listen to the way that it develops over time. However, before it dies away completely, you press/pluck another note -- say, the G above middle C. Initiating the second note does not affect the first... it's a complete entity in its own right. So let's add more oscillators and more pitch CVs to the design in Figure 1\. Surely we've then done everything necessary to let us produce multiple instances of our imitation of the stretched string? In other words, we have designed a polyphonic synthesizer, haven't we?

Unfortunately, no. This design (see Figure 3) has numerous flaws. To understand the most important of these, remember that an analogue synthesizer's oscillators are _always_ oscillating. On any commercial instrument, pressing a key on the keyboard may determine the pitch at which they do so, but it does not 'switch them on and off'. The amplifier at the end of the signal chain does this. Therefore, if the amplifier in Figure 3 is passing the sound of any one oscillator, it is passing the sound of all the others.

Figure 4 shows the result of this, and the result is the same, whether you're pressing one key, two, three... or a hundred. The multiple pitch CVs in Figure 3 may enable you to control the pitches of the oscillators, but you can't articulate them independently. It doesn't matter what contour you are using, or how you set the filter; this design is not a suitable basis for a polyphonic synth.

Let's recap... To imitate a moderately complex monophonic sound, or even create a new 'electronic' timbre, you need a minimum complement of an oscillator, a filter, an amplifier, a contour generator and a modulator. And, from the argument leading to Figure 4, it's clear that the presence of multiple pitch generators (ie. lots of oscillators) is insufficient to create true polyphonic synthesis.

As you might imagine, there are several ways to overcome this. But, before we do the obvious thing and throw multiple oscillators, filters, and amplifiers at the problem, we're going to step backwards and discuss an electronic instrument that isn't a synthesizer at all. It's the lowly electric organ.

**The Organ-ic Approach**

The neat thing about the electric organ is that, unlike most synthesizers, every key has the equivalent of a dedicated oscillator. The most common design uses 12 master oscillators that output high-frequency signals related to each of the keys C, C\#, D... and so on up to B. The outputs from each of the master oscillators then pass through devices called octave dividers. These reduce the initial frequencies by factors of two, four, eight... and so on, thus creating the correct frequencies for all of the Cs across the key[![](http://media.soundonsound.com/sos/dec00/images/synth5_8s.gif)][3]board, all of the C\#s, all of the Ds... and so on (see Figure 5, right).

Since each key on the organ's keyboard has a dedicated sound source, we can treat each key as an on/off switch that allows a desired pitch to enter the signal chain (or not). Indeed, there's no reason why the contacts underneath each key should not be exactly that... switches in the signal path itself. We can therefore design a keying system, as shown in Figure 6\. This is in marked contrast to the switches underneath a synth keyboard, which provide pitch CVs, Gates, and Trigger pulses, but have no direct contact with the audio signal.

Consider how this works. You press a key -- say, C1 -- and a circuit is completed. This allows the appropriately divided waveform generated by the master C oscillator to pass to the mixer. The signal then passes to the amplifier, and thence to the outside world, whereupon you hear it go 'beeeeep'.

Now, while still holding the C, you press another key -- a G. This time, the appropriately divided waveform from the master G oscillator passes to the mixer, and onwards to the amplifier. You hear a two-note chord. Now press an E. You hear this note added to the chord. Now rest a copy of War And Peace on the keyboard. You hear a cacophony of notes... you get the idea.

To continue the experiment, let's release the original C1\. No problem... you lift your finger, and the note stops without affecting any of the others that are still playing. Clearly, this organ is truly polyphonic in the sense that (i) you can play simultaneously as many notes as you wish, and (ii) every note is independent of all the others. This is because -- in effect -- every note has an associated amplifier with two states: Gain=1 (you press a key and complete the circuit) and Gain=0 (you release the key and _break_ the circuit). So let's redraw Figure 6 using amplifiers and Gate signals (see Figure 7).

**Organs Are Boring, Synths Are Not**

Unfortunately, the notes produced using our simple electric organ are not very interesting. For one thing, they have a constant tone, and the VCA contour is a simple on/off shape (as shown at the top of Figure 7). To put it bluntly... it's a cheap, nasty organ, just as we designed it to be. However, it still has that o[![](http://media.soundonsound.com/sos/dec00/images/synth9s.gif)][4]ne, huge advantage over all the synth designs we have discussed: it is truly polyphonic.

So let's add back the filter, amplifier, contour generator and modulator from Figure 1 (see Figure 8). Surely, we now have a polyphonic synthesizer? Umm... no (again). Figure 8 represents a form of sound generation called 'Paraphonic' synthesis, prevalent in the late '70s and early '80s. Perhaps a better name would be 'Quasi-Polyphonic'; but that hardly trips off the tongue, so 'paraphonic' it is.

But why isn't 'paraphony' (if there is such a word) the same as polyphony? The answer to this is obvious if we consider the articulation of individual notes played on the instrument in Figure 8\. Look at the components to the right of the mixer. As always, these shape the notes produced by the sound generating part of the electronics -- ie. all the stuff to the left of the mixer. Let's consider a note played in isolation:

![](http://media.soundonsound.com/images/regulars/bulbow.gif) You press a key.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) This opens the appropriate VCA (ie. sets the Gain to 1) and passes the appropriate pitch to the mixer.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) At the same time, the second Gate (or Trigger) initiates the ADSR contour generator.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The contour generator begins its Attack stage, followed by its Decay, and settles at its Sustain Level.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The output from the mixer is shaped in both tone and loudness by the A, D and S stages, and you hear the note develop as it does so.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) You release the key.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The note stops immediately, because the VCA Gain before the mixer immediately drops to zero. This is irrespective of the Release value of the contour generator.

OK... the Release is a bit of a problem, but it's easily corrected by changing the release time of the pre-mixer VCA to be equivalent to the maximum release time of the post-mixer contour generator. We couldn't do this if we were using the keyboard-switch architecture of Figure 6, but there's no reason why we shouldn't do it in Figure 8\. Indeed, we don't even need a dedicated contour generator to do this -- just a VCA whose gain CV leaks away relatively slowly once the Gate has been released (it's highly unlikely that you would ever design a synth like this, but let's not allow facts to interfere with a good argument).

Having made this adjustment to the VCAs in Figure 8, let's return to the experiment, extend our thoughts to include two notes played together, and see what happens:

![](http://media.soundonsound.com/images/regulars/bulbow.gif) You press the first key.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) As before, this opens the appropriate VCA and passes the appropriate pitch to the mixer.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) At the same time, the second Gate (or Trigger) initiates the ADSR contour generator.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The contour generator begins its Attack stage, followed by its Decay, and settles at its Sustain Level.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The output from the mixer is shaped in both tone and loudness by the A, D and S stages, and you hear the note develop through to its Sustain.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) Now you press a second key.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) Unlike the first, this does _not_ follow the ADS contour stages, because there is only one contour generator, and it has already reached the Sustain level. Consequently, the brightness and loudness of the second note immediately settle at the Sustain level.![](http://media.soundonsound.com/sos/dec00/images/synthpolymoog.gif)

![](http://media.soundonsound.com/images/regulars/bulbow.gif) You release the first key.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The volume of the first key decays to zero at the rate defined by the initial VCAs.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) You release the second key.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) This and the tail of the previous note decay to zero at the rate defined by the contour generator in the secondary part of the synth.

This may sound very confusing when written as 11 bullet points, but Figure 9 (above) should clarify matters.

Clearly, paraphonic synths are not truly polyphonic. Sure, we're much closer than before, and the output score in Figure 9 looks like the input score, but the 'shapes' of the individual notes (ie. the way their perceived loudness and brightness develops over time) are still wrong. Returning to our thoughts at the[![](http://media.soundonsound.com/sos/dec00/images/synth10s.gif)][5] very beginning of this article, imagine the surprise you would feel if, when you played multiple notes on a piano or a guitar, the second and subsequent ones lacked their natural brightness and loudness profiles. It couldn't happen.

You might therefore think that the architecture in Figure 9 is a silly way to build a synth, but there are many instruments very similar to this. The one that coined the name 'paraphonic' synthesis appeared in 1979\. This was the Roland Paraphonic RS505\. Others include the earlier Roland RS202, the Korg Polyphonic Ensembles, the ARP Omnis, and even the revered Solina String Ensemble.

**String Synthesizers**

Ah yes... string ensembles and string synths. It's no secret that I loved (and still love) these simple keyboards, partly because -- at a time when a Mellotron was an unaffordable dream -- there were examples of the genre that did not suffer from the 'paraphonic' limitation. Of these, the best (in my opinion) was the Logan String Melody II, a gorgeous instrument that shaped the 'loudness' of every note correctly, no matter how many you played simultaneously (see Figure 10).

The Logan did this by providing a dedicated AR contour generator for the VCAs controlling each note, thus shaping each one individually. Furthermore, the Attack and Release rates were under the player's control, so you could make notes as 'square' and organ-like or as slow and languorous as you desired. The String Melody II made full use of this flexibility by providing a selection of string and organ tones that you could contour as required.

On paper, it looks like a good system, and it is. Logans and other string machines that use this sy[![](http://media.soundonsound.com/sos/dec00/images/synth11s.gif)][6]stem (such as the Hohner String Performer and the Godwin String Concert) are, in my opinion, vastly superior to more famous paraphonic designs such as the Solina, the Rolands, and the Omnis.

Unfortunately, there's a problem. Although the Logan's architecture can articulate the _loudness_ of each note correctly, there's still no way to make it articulate the individual _tone_ (or brightness) of the notes. To do this, we must add a dedicated VCF and a second Contour Generator for each note, as shown in Figure 11 on page 84\.

At last, we're getting somewhere. Each time you play a note, the individual sound produced by the master oscillators and octave dividers is shaped by a dedicated filter and a dedicated amplifier, each controlled by its own contour generator. This means that each note is articulated independently of all the others, and the nastiness that is Figure 9 now becomes the true polyphony of Figure 12 (right).

So, taking my cue from the GX1 manual, here's this month's Synth Secret:

_Just like human beings, sounds are born, reach their prime, and die. Furthermore, if you have more than one person in a room, each must be born, reach his/her prime, and die independently of all the others._

It's obvious, really.

**Real Synthesizers**

Let's finish this month's Synth Secrets by taking a brief look at two synthesizers that adopted this approac[![](http://media.soundonsound.com/sos/dec00/images/synth12s.gif)][7]h to polyphony. The first of these is the grandiosely titled Polymoog Synthesizer, a much maligned instrument that doesn't deserve the opprobrium that has been heaped upon it. Ignoring subjective views of its strengths (or lack thereof) the Polymoog has a unique architecture based on Figure 11\. However, instead of providing user controls for the filters and amplifiers in each of the 'articulator' boards, it offers a handful of presets. This means that, when you press one of the buttons '1' to '8' in the centre of its control panel, you send predetermined CVs to the boards. Despite this minor limitation, the articulators still shape every note correctly. The Polymoog is a truly polyphonic synthesizer.

_However_... (you just _knew_ there'd be one of those, didn't you?), to this excellent architecture, Moog added a single VCF with a dedicated contour generator, another VCA with a dedicated contour generator, and a set of EQs called Resonators (see Figure 13). You might think that this would make the instrument even more powerful but, if you study the diagram, you can see that the designers did something really weird -- they embedded a true polysynth within a paraphonic synthesizer! It's small wonder that many players believed (and still believe) that the Polymoog was not truly polyphonic. If they had stuck to using the 'Mode' output and left all the controls in their 'Pre' states, they would have been able to play it in true polyphonic fashion. Unfortunately, almost everybody used the final VCA, the VCF and the Resonators, thus making the Polymoog 'merely' paraphonic. It was doomed.

The second synth in my tale is as revered as the Polymoog is derided. It is the Korg PS3200, the middle sibling in a family that comprises the PS3100, PS3200 and the mighty PS3300\. The 3200 combined 'total' polyphony (you could press every note on its 48-key keyboard simultaneously, and each would be[![](http://media.soundonsound.com/sos/dec00/images/synth13s.gif)][8] articulated correctly) with modularity (you could patch large chunks of it), and included 16 patch memories, too. Of course, the memories couldn't recreate any missing patch cables, but no matter... the PS3200 was, and remains, a unique, fantastic, dreamy... well, you get the picture. If you are an analogue _aficionado_ and you see a good one of these at a sensible price, buy it.

The important point here is that the PS3200 had all of its filters and amplifiers _before_ its mixer, thus retaining true polyphony in all circumstances. Indeed, its architecture (notwithstanding a bucketful of extra facilities) is so similar to Figure 11 that we need no extra diagram to describe it.

**Epilogue**

So there we have it... the secret of polyphonic synthesis. However, having ploughed through all that theory, you may be dismayed to learn that it was seldom put into practice -- very few synthesizers adopted this approach. There are two reasons for this. Firstly, there's the cost. Imagine it... under every key -- figuratively, if not geometrically -- there's a dedicated 'articulator' comprising at least one filter, at least one amplifier, and at least two contour generators. Even with the advent of ICs, this architecture is very expensive. The second reason is just as important. It's reliability. If you have a synth designed with 48 or even 72 individual 'articulator' boards, you have many, many times the chance of a breakdown compared to simpler instruments.

Indeed, I can't think of any synths -- other than the Polymoogs and the Korg PS3000-series -- that used this design. All the other analogue polysynths -- Prophets, Oberheims, Yamaha CSs, Roland Jupiter Xs, the Memorymoog -- all used a different method. Indeed, as I write this, I can think of three other approaches, all similar, but all different. We'll discuss those next month. [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][9]

[0]: http://www.soundonsound.com/sos/dec00/articles/synthsec.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/dec00/images/synth1_4.gif
[3]: http://media.soundonsound.com/sos/dec00/images/synth5_8.gif
[4]: http://media.soundonsound.com/sos/dec00/images/synth9.gif
[5]: http://media.soundonsound.com/sos/dec00/images/synth10.gif
[6]: http://media.soundonsound.com/sos/dec00/images/synth11.gif
[7]: http://media.soundonsound.com/sos/dec00/images/synth12.gif
[8]: http://media.soundonsound.com/sos/dec00/images/synth13.gif
[9]: http://www.soundonsound.com