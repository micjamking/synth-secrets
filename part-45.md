# Synth Secrets  
_Original article: [http://www.soundonsound.com/sos/Jan03/articles/synthsecrets0103.asp][0]_

**![](http://media.soundonsound.com/sos/jan03/images/synthrolandjx10.gif)When trying to copy a real piano with an analogue synth, if one patch doesn't quite do it, two just might...This is the 45th article in a 63-part series. Read [all parts][1].**

_

---

**Gordon Reid  
**_

For the past three instalments of Synth Secrets, I've been discussing the nature of the piano and looking at the ways in which we can attempt to recreate its sound. But even after all this, the best I have yet been able to manage is something that sounds similar to an electro-mechanical piano. (Of course, synthesizing the Fender Rhodes or Wurlitzer EP200 is no bad thing...) Numerous analogue pianos were released between 1970 and 1985, peaking with the superb Roland MKS10 rackmount module. But even this survived just two years before the introduction of samploid synths, and Rola
[![](http://media.soundonsound.com/sos/jan03/images/synthtable1.s.gif)][2]

The combined parameter table for Piano 1B and Piano 1A.

nd's own 'SAS' piano synthesis swept the analogue piano genre away as if it had never existed.

The demise of analogue piano synthesis is, in some ways, a shame. Although it never achieved the authenticity that early synth programmers had anticipated, it led to the creation of a family of new, piano-like sounds, the best of which exuded a character of their own, and which have now been all-but lost. So, to conclude this discussion of piano synthesis using analogue, subtractive techniques, I'll finish describing the Roland Super JX10 performance that I used as a stage piano in 1986 and 1987, prior to purchasing the first of a pair of SAS-based Roland MKS20s that I still use today.

**A Second JX10 Piano**

The table below left again shows the Piano 1B patch with which I concluded last month's Synth Secr
[![](http://media.soundonsound.com/sos/jan03/images/fig01piano1b.s.gif)][3]

Figure 1: The Piano 1B block diagram.

ets, and Figure 1,, shows the architecture that this describes. However, as you can see, the table also includes the values for another JX10 electric piano patch that --- for reasons that will soon become clear --- is called Piano 1A. 

Superficially, the columns for Piano 1A and Piano 1B might look similar, but this is misleading. It's a bit like saying that all Minimoog patches must sound similar because a photograph of the same control panel patched to produce
[![](http://media.soundonsound.com/sos/jan03/images/fig02snc1.s.gif)][4]

Figure 2: Two oscillators linked to produce hard sync (JX10 option: SNC1).

the sound of a piccolo looks pretty much the same as a photograph of the control panel set up to produce a rumbling bass. In other words, the JX10 has an architecture which, when represented in table form, always looks the same. But this too is misleading. The JX10's architecture is not entirely fixed; some parameters allow you to alter the way in which its sections interact with one another. If you think that this sounds suspiciously like a description of a modular synth, you are --- to some extent --- correct. Although the degree of flexibility involved is a fraction of that offered by a true modular, the Super JX10, like most powerful synthesizers, allows you to 'patch' certain elements to create different architectures.

To see how this works, let's consider parameters 23, 32, 45, 58, and 62\. The first of these, parameter 23, 'Cross Modulation', allows you to patch the oscillators in three quite different ways. As we discussed two months ago, SNC1 is hard synchronisation of DCO2 (the slave) by DCO1 (the master). In contrast, XMOD is frequency modulation of DCO2 (now acting as the carrier) by DCO1 (the modulator). The third option, named SNC2, is hard synchronisation of DCO2 (the slave) by DCO1 (the master) where DCO2 is also acting as the FM carri
[![](http://media.soundonsound.com/sos/jan03/images/fig03xmod.s.gif)][5]

Figure 3: The same two oscillators linked as an FM pair (JX10 option: XMOD).

er for DCO1 as modulator. As you would expect, SNC1 and XMOD create very different sounds but, because the effect of hard sync is the dominant factor in SNC2, this option sounds similar to SNC1, if somewhat richer in the mid and high frequencies.

Got all that? No? Well, maybe figures 2, 3 and 4 (next page) will help, because these illustrate the same options using two patchable analogue oscillators. A picture may not always be worth a thousand words, but in this case, three pictures are worth a few hundred.

The remaining four parameters from the list above (numbers 32, 45, 58 and 62) are all Envelope Mode selectors that allow you to determine which envelope genera
**Nomenclature**

Please note that throughout this article I shall use the conventional term 'Patch' to refer to what Roland calls a Super JX10 'Tone', and 'Performance' to refer to what Roland calls a Super JX10 'Patch'. I could stick to the company's usage, but I suspect that this would be more confusing for everybody.

tor affects the pitches of DCO1 and DCO2, the contribution of DCO2 to the mix, the LPF cut-off frequency, and the VCA Gain (respectively) and with which polarity they do so. This is a far cry from the facilities offered by a true modular synth, but it still extends the range of sounds that the JX10 can produce. So, having understood all of the above, let's now inspect the differences between Piano 1A and Piano 1B.

**The Piano 1A Oscillators**

Starting with the oscillators, the relationships between DCO1 and DCO2 are quite different in the two patches. Whereas last month's patch used a square-wave master and a sawtooth slave, this month's starts with a sawtooth master and a pulse-wave slave. In previous Synth Secrets, I have stated that, when hard sync'd, the waveform of the [![](http://media.soundonsound.com/sos/jan03/images/fig04snc2.s.gif)][6]

Figure 4: The two oscillators linked as an FM pair and as a sync'd pair (JX10 option: SNC2)

master oscillator should make no difference to the sound produced. On the other hand, the shape of the slave is extremely relevant to the output, because it changes the harmonic content of the resulting waveform. (See Figures 5a and 5b, below.) As is intuitively obvious from these figures, the tones of these waves will be quite different from one another.

So is the shape of DCO1 irrelevant? No. Because Piano 1A uses SNC2, DCO1 and DCO2 are also acting as a pair of FM operators. This means that the waveform of DCO1 will have an effect on the output of DCO2\. To be honest, this effect can be somewhat subtle, but when you are programming sounds deterministically (rather than using blind serendipity in the hope that you might stumble across something pleasing) it can be the difference between an acceptable patch and a superb one.

Even more significant is the change of the pitch relationship between DCO1 and DCO2\. Piano 1B had an offset of a little over 14 semitones. Piano 1A has an offset of a little under 33 semitones. This makes a huge difference to the output wavefor
**Digital Parameter Access**

If you're a regular reader of Synth Secrets, it can't have escaped your notice that I've used the last two parts as a bit of a tutorial on understanding Digital Parameter Access programming systems. In the past, these have attracted a great deal of criticism, almost to the point of hysteria, and no doubt some analogue anoraks will continue to heap opprobrium upon synths that use DPA. But I hope that I have shown that this is simply a different way to represent the same sound-making facilities that you will find on the knobbiest of analogue synthesizers, and to control the sounds thus produced.

Certainly, the Roland PG800 programmer, with its knobs and sliders, makes it altogether easier to program the JX10, but even this controls fewer than half of the parameters offered by the instrument. You might wish for things to be otherwise, and for all synths to be festooned with dedicated knobs and sliders. But when you consider that the JX10's DPA tables contain 147 parameters (that's 44 for each patch, and 59 for the performance and MIDI system) --- and that's not including the synth's physical performance controls, nor the parameters that control these controls, nor the 'Chase Play', nor the fledgling sequencer --- you'll soon realise that it ain't gonna happen.

m and its harmonic content. What's more, whereas the pitch of the slave in Piano 1B is swept by ENV1 (parameters 27 and 32) the frequency relationship of DCO1 to DCO2 in Piano 1A is constant throughout the note. This is because the value of parameter 27 is zero, thus making parameter 32 irrelevant.

Hang on... if there is no sync sweep at the start of the sound, does this render redundant the last two months' discussion of sync and its importance to the attack of the piano sound? It seems to. The use of both hard sync and FM in SNC2 is creating a complex new waveform but, unlike in the case of Piano 1B, the 'Cross Modulation' in Piano 1A is not imparting any blip to the front of the sound. You can hear this (or, rather, the lack of it) if you play the two patches one after the other. The first few milliseconds of Piano 1B exhibit a definite clunk, especially in the middle and lower octaves. Piano 1A lacks this and, as a result, its attack is less defined.

Moving on, you can see that Piano 1A's DCO1 is contributing its full amplitude in the Mixer, whereas DCO2 is contributing just 44 percent of maximum, plus an amount shaped by ENV1\. Having discussed the relevant issues in depth over the past couple of months, I'll leave it to you to work out the effects of the ADSR, Key Follow (parameter 85), and Dynamics (parameter 44). Why should I do all the work?

**Filters, Amplifiers And Envelopes**

Looking at the rest of the table on page 136, we can see that there is a great deal of similarity between Piano 1A and Piano 1B. The filter settings are similar, the VCA/Chorus
[![](http://media.soundonsound.com/sos/jan03/images/fig05asyncdsaw.s.gif)][7]

Figure 5a: A sawtooth slave of frequency F sync'd by a master with frequency 0.4F.

is almost identical, and the LFO remains irrelevant.

The greatest difference lies in the envelope shapes, and the patching of them. Figures 6a to 6d, above, represent the ENV1 and ENV2 contours for each patch, and show the assignment for each.

At first sight, these seem quite similar, but the only common shape/destination is that of the two ENV2s, which control the total amplitude of their respective sounds. This means that the sweep of the filter and the contribution of DCO2 are quite different in each case.

To conclude this analysis of Piano 1A, I'll draw your attention to the block diagram equivalent to Figure 1\. (See Figure 7, below.) 

If you compare this to Figure 1, you can see the differences discussed above; the additional FM connection between DCO1 and DCO2, and the altered assignments for ENV1 and ENV2\.

As I did last month, I'm now going to ask: how does it sound? Well, there's the lack of the clunk, which disappeared when the sync sweep was removed from Piano 1A. But a more significant differenc
[![](http://media.soundonsound.com/sos/jan03/images/fig05bsyncdpulse.s.gif)][8]

Figure 5b: A square wave slave of frequency F sync'd by a master with frequency 0.4F

e is that Piano 1A is brighter, with more body in the mid frequencies. Overall, it sounds like a good 'analogue' piano patch, but one that makes little attempt to recreate the nuances of a real piano, or even a real electric piano such as a Wurlitzer or Rhodes. So what use is it?

**An Introduction To Layering**

In isolation, neither Piano 1A nor Piano 1B have a great deal to recommend them. Sure, they're usable in a '1985' sort of way, but they offer little that makes them cry out "Use Me". Fortunately, the Super JX10 is not just the 12-voice analogue synthesizer that we have been considering for the past three months. It is also two independent six-voice synthesizers.

You control the two [![](http://media.soundonsound.com/sos/jan03/images/fig06apiano1benv1.s.gif)][9]

[![](http://media.soundonsound.com/sos/jan03/images/fig06bpiano1benv2.s.gif)][10]

[![](http://media.soundonsound.com/sos/jan03/images/fig06cpiano1aenv1.s.gif)][11]

[![](http://media.soundonsound.com/sos/jan03/images/fig06dpiano1aenv2.s.gif)][12]

Figures 6a-6d: The four ADSR envelopes used in Piano 1A and Piano 1B.

halves of the JX10 using a second table of parameter values, divided into Patch (which we would normally call 'Performance') and MIDI. Called the Edit Map, this table offers no fewer than 59 parameters, and it is larger than the patch table used to edit the patches themselves. I have, therefore, confined the next part of this discussion to the parameters used to layer two patches into a single, composite sound.

The table on the left shows the parameters and values used in the Roland factory Performance 'H1: Acoustic Piano' which, as you might already have guessed, comprises Piano 1A and Piano 1B.

Starting with the System parameters, the first to consider is number 17, which states that the JX10 is in Dual mode, meaning that the two patches are layered one upon the other across the entire width of the keyboard. This, for reasons that I hope are obvious, makes parameters 13 and 14 irrelevant. Because portamento is Off in parameters 37 and 47, the portamento value is also irrelevant, and there is no slew between notes. However, for some unfathomable reason, Roland saw fit to program a pitch-bend range of two semitones for this Performance --- not just weird, actually wron
[![](http://media.soundonsound.com/sos/jan03/images/fig07piano1a.s.gif)][13]

Figure 7: The Piano 1A block diagram.Layering Piano 1A and Piano 1B into 'H1: Acoustic Piano'.

g. This then leaves the balance between the Upper and Lower patches, which is set to 50/50, and the detune between them. The detune value of +13 (on some arbitrary Roland scale) is a subtle difference, but proves to be important, and we shall return to this later.

The next bunch of parameters refers to aftertouch and these, as they must be, are set to zero. Remember, it's not possible to affect the nature of a piano note (other than to curtail it) once it has sounded. Any parameters that let you change the brightness, the loudness, or add vibrato by bearing down on a depressed key must be set to zero.

We now come to the two sounds comprising the Performance, and parameters 31 and 41 allow us to insert Piano 1B and Piano 1A into their appropriate slots. Next, parameters 32 and 42 shift the two patches down an octave (
[![](http://media.soundonsound.com/sos/jan03/images/fig08acousticpiano.s.gif)][14]

Figure 8: Layering two patches in 'Dual' mode.

this may be a modification of my own, not Roland's original programming... I forget), while numbers 33 and 43 tell the JX10 that they respond in 'Poly 1' mode, which means that a new voice is assigned each time you press a key. (This also makes parameters 34 and 44 irrelevant, because you cannot be in a polyphonic mode and a Unison mode simultaneously.) Next, we find that 'Hold' --- the response to the sustain pedal --- is On for both patches, Portamento (as stated above) is Off, and Bend (I still don't understand this) is On. That leaves LFO Mod Depth, which is the Performance's response to the modulation direction of the combined pitch-bend/modulation joystick. Again, this should be zero for both patches, but for Piano 1B it is set to 01\. In truth, I find this imperceptible, but it should be zero nonetheless.

**The End Result**

So what does this tell us? Stripping away all the superfluous bits and pieces, we have simply taken two similar, but not identical, six-voice patches and layered them at the same loudness across the keyboard, but with a small tuning offset. (See Figure 8.)

There's nothing particularly clever happening here; you could do the same thing by taking a MIDI synthesizer and connecting it to an equivalent module, playing the two simultaneously and mixing their outputs into a single sound. Give
[![](http://media.soundonsound.com/sos/jan03/images/synthtable2.s.gif)][15]

Layering Piano 1A and Piano 1B into 'H1: Acoustic Piano'.

n this, it's time to ask once again, "how does it sound?". The answer may surprise you. 'H1: Acoustic Piano' sounds more rich, more vibrant, more expressive, more like a real instrument. But why?

The secret --- and it's an important one --- lies in the combination of two sounds that are similar enough to be indistinguishable within the composite, but different enough to create a sound that is more interesting than either of the components in isolation. Look at it like this: if you layered and detuned the piccolo and Minimoog bass that I mentioned near the start of this article, the composite would sound like an out-of-tune piccolo and Minimoog bass. On the other hand, if you layered two detuned but otherwise identical sounds, the result would sound like the original, but chorused.

On the other hand (which I realise is only possible if you have three hands) the two components in 'H1: Acoustic Piano' complement each other in superb fashion. Piano 1B supplies the initial thunk, while Piano 1A has the richer spectrum and provides more of the body of the sound. Furthermore, the detuned harmonics of the complex, sync'd waveforms sweep in and out of phase with one another, reinforcing and then interfering with one another destructively, to imitate the energy interactions within an acoustic piano. Then, towards the end of the note, Piano 1B dominates again (thanks to the longer Decay and Release in ENV2, which drives the Gain of the audio VCA) and the filter closes to leave just the fundamental and a few low harmonics in the tail. 

All of this conforms closely to the principles we derived for the piano in the October instalment of Synth Secrets. What's more, if you consider things such as the filter scaling and dynamics responses of the component patches, you'll see that Roland's programmers were not blindly groping for their piano sound: this performance was crafted with a great deal of thought.

So I'll ask one final time, "How does it sound?" The answer is that 'H1: Acoustic Piano' has many of the characteristics of an acoustic or electro-mechanical piano, without sounding anything like the former, or even quite like the latter. It's responsive, it's expressive and, for many purposes, it's every bit as usable as a Fender Rhodes 73 or a Wurlitzer EP200\. In fact, there are times when I would still use it today, in preference to any of the 'real' things. [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][16]

[0]: http://www.soundonsound.com/sos/Jan03/articles/synthsecrets0103.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/jan03/images/synthtable1.l.gif
[3]: http://media.soundonsound.com/sos/jan03/images/fig01piano1b.l.gif
[4]: http://media.soundonsound.com/sos/jan03/images/fig02snc1.l.gif
[5]: http://media.soundonsound.com/sos/jan03/images/fig03xmod.l.gif
[6]: http://media.soundonsound.com/sos/jan03/images/fig04snc2.l.gif
[7]: http://media.soundonsound.com/sos/jan03/images/fig05asyncdsaw.l.gif
[8]: http://media.soundonsound.com/sos/jan03/images/fig05bsyncdpulse.l.gif
[9]: http://media.soundonsound.com/sos/jan03/images/fig06apiano1benv1.l.gif
[10]: http://media.soundonsound.com/sos/jan03/images/fig06bpiano1benv2.l.gif
[11]: http://media.soundonsound.com/sos/jan03/images/fig06cpiano1aenv1.l.gif
[12]: http://media.soundonsound.com/sos/jan03/images/fig06dpiano1aenv2.l.gif
[13]: http://media.soundonsound.com/sos/jan03/images/fig07piano1a.l.gif
[14]: http://media.soundonsound.com/sos/jan03/images/fig08acousticpiano.l.gif
[15]: http://media.soundonsound.com/sos/jan03/images/synthtable2.l.gif
[16]: http://www.soundonsound.com