# SYNTH SECRETS  
_Original article: [http://www.soundonsound.com/sos/Aug02/articles/synthsecrets0802.asp][0]_

[![](http://media.soundonsound.com/sos/aug02/images/synthfig01nordcymbal.s.gif)][1]

Figure 1: Synthesizing a cymbal using the Nord Modular.

Having come up last month with a reasonably realistic cymbal patch, it's time to take the principles of synthesizing metallic percussion one stage further, and produce bell sounds. But there's more to this than you might think... This is the 40th article in a 63-part series. Read [all parts][2].

_

---

**Gordon Reid**_

Though you may not have been aware of it, for the past three months we've been investigating the sound-generation mechanism of a particular class of _idiophones_, the cymbals. Cymbals, hi-hats, and bells are all idiophones, but the family also includes instruments such as marimbas and xylophones. You might think that these share few characteristics with cymbals, but they are all rigid objects that require no tensioning mechanism in order to vibrate and produce a sound, in contrast to the _membranophones_ discussed in past Synth Secrets (such as the snare and bass drums).

**Taking It Further**

Having found that we can recreate the cymbal sound with reasonable realism, you might be forgiven for thinking that we can use our cymbal patch to synthesize other metallic percussion instruments. And, in part, you would be right. To demonstrate this, let's consider the cymbal patch in Figure 1 (right), with which I concluded last month's Synth Secrets. The key to this patch is the use of the six oscillators arranged as three frequency-modulated pairs. These produce a dense fog of enharmonic partials that, without need for any further treatment, sound inherently 'metallic'.

[![](http://media.soundonsound.com/sos/aug02/images/synthfig02nordhh.s.gif)][3]

Figure 2: A hi-hat patch for the Nord Modular.

It therefore seems reasonable to suppose that we can adjust the parameters in Figure 1 to emulate a range of percussion instruments related to cymbals. And, as suppositions go, this is not a bad one. For example, shortening the envelope times allows you to synthesize very acceptable hi-hats. Making the envelopes briefer still produces excellent imitations of the stick hitting the hat, and careful adjustment of the filter frequencies, envelope times and mixer settings (the last of which controls the relative loudness of the stick impact and the body of the sound) creates very realistic effects. You can even emulate the opening and closing of the hats by adding modules such as the Control Sequencer at the bottom left of Figure 2\. This modifies the decay rate of envelope AHD-Env2, creating subtle changes in the sound and ensuring that the patch sounds more interesting (and more realistic) than the static samples found in most drum machines and samploid synths.

Unfortunately, if we follow this line of investigation any further, we'll find that we are doing nothing more challenging than synthesizing different sizes and thicknesses of cymbals and related instruments. In other words, a flat plate bashed into the shape and size of a cymbal is much like a flat plate bashed into the shape and size of a hi-hat, and so on. So, to move our understanding of idiophones forward, we must consider the case where the instrument exhibits different properties from the above.

A few months ago, we did a similar thing by taking a membranophone and adding a snare to its carry head. This simple alteration changed the physics significantly, creating two very different percussion instruments; the bass and snare drum. This month, we're going to do something equally simple; change the shape of the instrument. We're going to talk about bells.

**From Cymbals To Bells**

At first sight, it might seem simple to turn a cymbal into a bell... you just push down the edges and, notwithstanding a lot of crinkling, you'll eventually create a bell shape (see Figure 3, below left) You might therefore expect that, if you hit this with the same sticks and in the same way as you did before, it would sound similar to the cymbal. However, as experience tells us, it does not.

[![](http://media.soundonsound.com/sos/aug02/images/fig03thebell.s.gif)][4]

Figure 3: Simplified representations of the cymbal and the bell.

[![](http://media.soundonsound.com/sos/aug02/images/fig04thebellexploded.s.gif)][5]

Figure 4: The parts of the bell.

This is because bells are much more complex than Figure 3 would suggest. Sure, there are some that are, in essence, bent sheets, lacking internal structure and perhaps even displaying a weld along one edge. But, due to the change in geometry, hitting one of these produces a sound very different from that of a cymbal. Some bells are not unlike cylindrical shells with end-caps, and these too sound very different from other idiophones. Then there are sleigh-bells, wooden bells shaped like seed pods... and many others, all of which produce distinctive sounds easily distinguished from one another as well as from cymbals and hi-hats.

The types of bell with which we are most acquainted are church bells and hand-bells. Unlike cymbals and hi-hats, these are not bent sheets of metal, and they do not exhibit the acoustic properties of plates. These bells are complex shapes cast from molten metal and lathed internally, which modifies the sound in various desirable ways, as we shall see. The consequence of this is that, while we use the same mathematical tools to analyse church bells as other metal idiophones, and while the shapes of the vibrations are analogous to those of plates, church bells have quite a different set of acoustic properties to anything we have previously discussed --- which is, of course, why they sound so different.

There are many parts to a church bell. The top is the _crown_, and this is followed by the _shoulder_, the _waist_, the _bow_, and the _lip_. The opening at the bottom is the _mouth_. Clearly, bells are very human lumps of metal (see Figure 4, below).

There are two common ways used to energise a bell like this. The first is the method found in church and schoolyard bells. These have internal metal _clappers_ that strike the bow when the bell is rocked or shaken. The second is to use an external hammer or a clapper connected to a mechanical lever. When a number of such bells are placed together and tuned to a chromatic scale, and the levers are arranged in a conventional keyboard layout, the result is the world's heaviest musical instrument, the _carillon_.

Hang on a second... tuned to a chromatic scale? If we can tune bells to have pitches that we can play from a keyboard, they must be _very_ different from cymbals, which, as we know from last month, produce highly complex, atonal timbres.

[![](http://media.soundonsound.com/sos/aug02/images/fig05bellmode.s.gif)][6]

Figure 5: The 2,2 mode of a church bell.

[![](http://media.soundonsound.com/sos/aug02/images/fig0622mouthmode.s.gif)][7]

Figure 6: Looking up into the mouth of the bell with a 2,n mode excited.

[![](http://media.soundonsound.com/sos/aug02/images/fig0722sectionmode.s.gif)][8]

Figure 7: A cross-section of half a bell, showing the motion when an m,2 mode is excited.

**The Modes Of A Bell**

Like any other musical instrument, a bell's timbre is determined by the pitches and amplitudes of the partials that constitute its sound. And, as we have discussed before, these partials are related to modes of vibration. In a bell, the modes are described by the number of circular nodes around the body of the bell, and the number of radial nodes that we can trace from the lip on one side, over the crown, and down to the lip on the other side. I have shown one example of a bell mode in Figure 5\. You can see clearly the two radial and two circumferential nodes that define the 2,2 mode shown.

However, I can't now follow previous Synth Secrets practice and draw a selection of low-order modes for the bell --- it would soon drive me (and probably you) crazy. This is because, unlike the (essentially) two-dimensional heads of the bass drum and snare drum, and the cymbals discussed over the past few months, bells are three-dimensional structures. To give you some idea how this complicates matters, Figures 6 and 7 show the mouth and a vertical section of the bell oscillating as shown in Figure 5\.

In Figure 6, the black circle represents the shape of the mouth when the bell is at rest. The blue line shows the distortion of the mouth at some arbitrary moment when the bell is ringing with 2,n motion (where 'n' is any whole number), while the red line shows the distortion due to that mode half a cycle later.

Figure 7 shows a cross-section of one half of the bell when ringing with an m,2 motion (where 'm' is any whole number). Again, the black section represents the shape of the bell when the bell is at rest. It should now be clear that the pink section shows the distortion of the bell at some arbitrary moment, while the yellow section shows the distortion due to that mode half a cycle later.

Perhaps you can picture how these motions coexist in the 2,2 mode. Now try to imagine how this relatively simple mode co-exists and interacts with other modes. Actually, it's not as bad as you might think. Just try to imagine the bell as a flat plate --- ie. reverse the transformation in Figure 3 --- and you will see that the motions relative to its surface are analogous to those of the cymbal modes in Synth Secrets, April 2002\.

**The Bell's Sound**

Next, we'll consider the surprising property shared by most traditional bells, but not by cymbals and their brethren. Many centuries ago, the people who cast metal bells discovered that they could make them sound more 'musical' by shaping the inside carefully. They probably didn't know it at the time, but they were modifying the positions of the nodes, and thus the frequencies at which they vibrated, until they generated a quasi-harmonic series. This is why you can play tunes on bells. Nonetheless, bells are not the same as simple harmonic oscillators. If they were, they might sound like hammered strings. So what gives bells their identifiable timbre?

A bell exhibits one type of behaviour at the start of a note, and different behaviour as the note decays. Experiments show that there are, in fact, three distinct phases to the sound. The first is the _strike_ --- the sound of one large lump of metal hitting another. As you would expect, this is enharmonic, and it dies away quickly. The second phase is the strike note, and this is dominated by a handful of strong, low harmonics. Finally, the note's lingering energy is radiated by a sub-harmonic an octave below the fundamental.

[![](http://media.soundonsound.com/sos/aug02/images/fig08threephases.s.gif)][9]

Figure 8: Representing the three phases of the bell's sound.

[![](http://media.soundonsound.com/sos/aug02/images/synthfig09partials.s.gif)][10]

Figure 9: Generating a stretched spectrum comprising six partials.

[![](http://media.soundonsound.com/sos/aug02/images/synthfig10envelope.s.gif)][11]

Figure 10: A dual-stage decay for the bell sound.

[![](http://media.soundonsound.com/sos/aug02/images/synthfig11basicsound.s.gif)][12]

Figure 11: Shaping the basic sound and creating 'warble'.

[![](http://media.soundonsound.com/sos/aug02/images/synthfig12clapper.s.gif)][13]

Figure 12: An atonal patch to emphasise the clapper sound.

[![](http://media.soundonsound.com/sos/aug02/images/synthfig13hum.s.gif)][14]

Figure 13: The subharmonic 'hum' at the tail of the sound.

[![](http://media.soundonsound.com/sos/aug02/images/synthfig14thebell.s.gif)][15]

Figure 14: The Nord Modular bell patch.

The strike note is particularly interesting, because the perceived pitch is not necessarily the pitch of the lowest energetic partial. Do you remember the organ builder's trick I mentioned when I discussed frequency-shifters back in January's instalment of this series? I described how, if the partials of a sound lie in an harmonic pattern based on a fundamental frequency that _isn't_ present in the signal, the human brain inserts the missing pitch, and you 'hear' the fundamental, even if it's not actually there (see [www.soundonsound.com/sos/jan02/articles/synthsecrets0102.asp][16] to read the whole article). The strike note of a well-tuned bell does the same thing. The dominant partials can be tuned to produce frequencies in the ratios 2:3:4, so that the listener hears the implied pitch of '1'. For example, if the dominant partials vibrate with frequencies 100Hz, 150Hz and 200Hz, you will 'hear' a fundamental of 50Hz.

Putting all of this knowledge together, we can create Figure 8 (above). This is only a graphic representation, but it shows the three phases of the sound in an easily understood form. As you can see, an initial burst of enharmonic partials is followed by an extended period in which the low harmonics (some of which grow progressively sharper with increasing frequency) determine the sound. Below these, there lies the subharmonic that dominates the sound in its final moments.

Of course, the sound of a real bell is much more complex than this. I have ignored numerous factors such as the changes that occur when the bell is struck with clappers of different materials or at different speeds, as well as those that occur when bells are cast of different alloys, or of different sizes and relative dimensions. Fortunately, we can ignore all of these here, although we must include one additional factor if we are to synthesize realistic bell sounds. Like most adults in the bath, bells _warble_... rather than producing a steady 'boing', many bells make a noise closer to 'boii-yoy-yoy-yoiinnnggg' because their modes can be almost _degenerate_. This means that bells produce two partials of almost (but not quite) identical frequencies, and these interfere (or 'beat') in the same way as do two synth oscillators of similar frequency.

**Synthesis**

Given all the above, we now have sufficient information to synthesize a bell. We'll start with the strike note. Since we require a small number of partials with 'stretched' harmonics, we can't use conventional analogue oscillators. As I've mentioned many times before, the partials of the waveforms generated by analogue synths lie in a perfect harmonic series (ie. 1:2:3:4:5:6... and so on) and will not sound correct here. Bells are much better synthesized using additive synthesis.

Clavia's Nord Modular has a module called 'OscSineBank', which is perfect for this purpose. Generating six sine waves of freely tuneable frequencies and amplitudes, it is ideal for creating the stretched harmonic spectrum that is the basis of the bell's sound (see Figure 9 above).

Having set this up, we could shape the amplitude of the sound using a multi-stage envelope generator/amplifier. This would allow us to create a dual decay with a rapid initial peak followed by a slower decay/release (see Figure 10, below). However, I'm going to direct the output from the oscillator bank to two envelope generators, the amplifier of one of which is being modulated by an LFO. This allows me to create the warble. Alright, it affects the amplitude envelope of the whole sound rather than individual harmonics, but the effect is subjectively good (see Figure 11, above).

We must now add sound generators for the initial impact of the clapper, and for the subharmonic that lingers at the tail of the sound. I have generated the first of these with two-operator sine-wave FM synthesis, the output from which is passed through another envelope generator/amplifier with shorter decay/release times than the ones in Figure 11\. The resulting sound is not particularly complex, but it is atonal, and shorter-lived than the 'body' of the sound (see Figure 12, right). In isolation, this part of the patch does not sound great, but together with the rest of the sound, I find that it adds a subtle something that I like.

The subharmonic hum is generated using two further sine-wave oscillators set approximately an octave apart, but detuned just enough to create a slight beat in the sound. These are passed through another multi-stage envelope generator/amplifier, but this time with a slower attack and more extended tail (see Figure 13, below right).

Putting everything together, we now have a patch that combines a set of short (-ish) atonal components, an extended quasi-harmonic series that warbles, and a long tail comprising a couple of slowly beating low-pitched subharmonics (see Figure 14, below). Theory tells us that this should sound much like a bell, and guess what... it does!

**Epilogue**

If you've rushed off to create this patch, and found that it sounds incredibly unrealistic across most of the keyboard, please don't write to _Sound On Sound_ to tell me --- I know. There are several reasons for this, the most important of which is that I designed the patch for use on middle 'C'. Stick to this, and you can hear how it creates the various components of the bell's unique sound (it also works well on 'C\#', 'D' and 'D\#'.) Sure, it could all be done in other ways, but that's not the point. I designed this patch from first principles in about five minutes, and it sounds very much as I intended (ie. like a bell). Given that musical inspiration can evaporate more quickly than methanol, it's important to be able to create sounds quickly and efficiently when working on a track. A firm understanding of the physics of the bell enabled me to do this. See... all this science and analysis really works! [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][17]

**The TR808 Hi-hat**

[![](http://media.soundonsound.com/sos/aug02/images/synthfigb1808hh.s.gif)][18]

The hi-hat generators in the Roland TR808\.

[![](http://media.soundonsound.com/sos/aug02/images/figb2nordhhdiagram.s.gif)][19]

The sound generator from Figure 2 redrawn.

[![](http://media.soundonsound.com/sos/aug02/images/figb3tr808hh.s.gif)][20]

The TR808 hi-hat sound generator redrawn.

As in previous parts of this series, I thought that it would be useful to compare the hi-hat patch in Figure 2 with the hi-hat circuits in the Roland TR808 drum machine (see diagram, right). Although this diagram and Figure 2 look different, they are in many ways structurally quite similar to one another --- exactly as you might expect, since Roland's engineers and I were trying to create the same sound. Furthermore, the TR808's six square-wave oscillators were one of the inspirations for the six pulse-wave oscillators in my cymbal patch, from which Figure 2 is derived.

To demonstrate the similarity between the two architectures, I have redrawn both in standard Synth Secrets-style format. The second diagram below shows the signal flow within the Nord patch, and the final diagram in this box does the same for the TR808\.

Sure, there are differences between the two. Nevertheless, the essential elements are the same: multiple oscillators are fed through a filter that removes the low frequencies, and through a VCA controlled by a simple contour generator. The only extra element in the TR808 is a 'shut off' circuit that curtails the decay of the Open Hi-Hat contour generator when a Closed Hi-Hat is detected. This is not necessary in the Nord patch, because the same signal path produces both voices.



[0]: http://www.soundonsound.com/sos/Aug02/articles/synthsecrets0802.asp
[1]: http://media.soundonsound.com/sos/aug02/images/synthfig01nordcymbal.l.gif
[2]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[3]: http://media.soundonsound.com/sos/aug02/images/synthfig02nordhh.l.gif
[4]: http://media.soundonsound.com/sos/aug02/images/fig03thebell.l.gif
[5]: http://media.soundonsound.com/sos/aug02/images/fig04thebellexploded.l.gif
[6]: http://media.soundonsound.com/sos/aug02/images/fig05bellmode.l.gif
[7]: http://media.soundonsound.com/sos/aug02/images/fig0622mouthmode.l.gif
[8]: http://media.soundonsound.com/sos/aug02/images/fig0722sectionmode.l.gif
[9]: http://media.soundonsound.com/sos/aug02/images/fig08threephases.l.gif
[10]: http://media.soundonsound.com/sos/aug02/images/synthfig09partials.l.gif
[11]: http://media.soundonsound.com/sos/aug02/images/synthfig10envelope.l.gif
[12]: http://media.soundonsound.com/sos/aug02/images/synthfig11basicsound.l.gif
[13]: http://media.soundonsound.com/sos/aug02/images/synthfig12clapper.l.gif
[14]: http://media.soundonsound.com/sos/aug02/images/synthfig13hum.l.gif
[15]: http://media.soundonsound.com/sos/aug02/images/synthfig14thebell.l.gif
[16]: http://www.soundonsound.com/sos/jan02/articles/synthsecrets0102.asp
[17]: http://www.soundonsound.com
[18]: http://media.soundonsound.com/sos/aug02/images/synthfigb1808hh.l.gif
[19]: http://media.soundonsound.com/sos/aug02/images/figb2nordhhdiagram.l.gif
[20]: http://media.soundonsound.com/sos/aug02/images/figb3tr808hh.l.gif