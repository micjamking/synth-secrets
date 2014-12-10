# Synth Secrets  
_Original article: [http://www.soundonsound.com/sos/Feb03/articles/synthsecrets46.asp][0]_

Original photos: Richard Ecclestone  
![](http://media.soundonsound.com/sos/feb03/images/synthheader.gif)

Analogue synths can't synthesize every sound, but the attempts made to replicate the sound of orchestral strings were so successful that so-called string machines became much-loved instruments in their own right. We begin a voyage into the world of synthesized strings... This is the 46th article in a 63-part series. Read [all parts][1].

_

---

**Gordon Reid**_

For the past few months, I've been investigating the sound of the acoustic piano, and showing that when we attempt to synthesize this, the best we can manage is something that sounds similar to an electro-mechanical piano. Of course, this is a valid aim in itself, and I can think of numerous specialist synths dedicated to this task. Reviewing one of these recently set me thinking... are there other important electronic or electro-mechanical keyboard sounds that are themselves emulated using synths? Of course there are; almost every polysynth has patches designed to emulate Hammond organs and Hohner Clavinets. But just as important as these is a class of electronic keyboards that has provided the foundation for much electronic music from the 1960s onwards. There are the ensemble keyboards, known variously as string ensembles, string synths or simply string machines.

The first keyboard to fit the modern description of the Ensemble was the prototype Freeman String Synth. This used the divide-down oscillator technology of cheap 1960s organs, but sounded nothing like a cheap organ (for more on organs and divide-down technology, see the instalment of this series in _SOS_ December 2000, or direct your web browser at: [www.soundonsound.com/sos/dec00/articles/synthsec.asp][2]). Indeed, its inventor, Ken Freeman, was sought-after as a session player in the 1970s because he was capable of creating superb ensemble arrangements using this keyboard.

Freeman had a distinct advantage over subsequent players because his instrument used more oscillators and more modulators per note than were employed in the cut-down version sold to the public. The Lowrey String Symphoniser (no, that's not a spelling mistake) was still a nice instrument, but Freeman's original produced a remarkably lush sound without resorting to chorus effects.

In theory, Freeman could have used multiple oscillators per note to imitate the sound of multiple musicians (such as violinists) playing at the same pitch. In addition, he might have tuned each oscillator differently to imitate the random inaccuracies of human players. He might even have added multiple envelopes and modulators to imitate the different articulation and vibrato of each player. And, in theory, that would have worked nicely. But given the size and weight of electronics from that era, and the fact that a human ensemble can comprise 30 or more musicians, the Freeman String Synth would have been huge, heavy, and ridiculously expensive. Even with today's digital technology, there has never been a polysynth that offers 30 oscillators, 30 envelopes, and 30 or more LFOs per note.

Clearly, Freeman's keyboard worked in a different way, so is it reasonable to assume that we can use any analogue polysynth to emulate its architecture and recreate its sound? Well... no. The Freeman string synth was fully polyphonic across its 61-note keyboard, and (if I remember correctly) incorporated no fewer than three oscillators and three modulators per note. This is non-trivial stuff, equalled (well, almost equalled) only by the mighty Korg PS3300\. But since the Korg now commands prices approaching £10,000, I thought that it might be interesting to see whether we can use an affordable analogue polysynth to create a lush ensemble sound and --- like Freeman himself --- do so without recourse to effects units.

**Detuning Multiple Oscillators**

Why is it a good idea to have a synth with more than one oscillator per voice? Well, it means you can mix two waveforms in a single sound (although many synths allow you to mix the waveforms produced by each oscillator), and you can also program intervals between oscillators. Many important sounds were invented this way, such as Keith Emerson's lead sounds (these were unimaginable before the advent of the Moog modulars in the 1960s, and used three oscillators tuned to the tonic, third and fifth).

But for me, the most frequent benefit of having two or more oscillators per voice is to be able to detune them. Programmed correctly, this does not give rise to two distinguishable pitches nor, if used judiciously, does it make one sound 'flat' against the other. Instead, the interaction of the two creates a new class of timbres.

[![](http://media.soundonsound.com/sos/feb03/images/fig01beating.s.gif)][3]

Figure 1: (left) The effect of summing two sine waves of similar frequencies.

Figure 1 (on next page) shows what happens when you mix two sine waves of equal amplitude, one of frequency 100Hz, and the other of 101Hz. The result may look surprising, but it is obvious when you think about it. The two signals are moving in and out of phase with each other so there will be times when they reinforce and there will be times when they interfere destructively. Consequently, the amplitude of the resulting waveform will range from the sum of the inputs to zero, swinging smoothly between the two.

Looking at Figure 1 again, it's clear that the output is punctuated by silences. We hear this as _beating_, and its frequency is the same as the difference in the frequencies of the two oscillators.

Beating is familiar to everyone who has ever played with the detune knob on a dual-oscillator synth, but it may not be obvious how this leads us toward ensemble sounds. So it's time to remind ourselves that audio-frequency sine waves are quite rare, and that the waveform produced by a string ensemble --- whether human or transistorised --- is going to be significantly different from this.

The unmodified waveform produced by a real string is similar to a sawtooth wave, so it's no surprise to find that the waveform selected by the designers of electronic ensembles was always a sawtooth or a similarly spiky waveform. When we calculate the result of detuning two sawtooth waves, we find that these exhibit a less pronounced modulation, one form of which I have shown in Figure 2\. Listening to this, we find that the new sound appears 'thicker' than either of the oscillators in isolation, and this can be very pleasing to the ear.

[![](http://media.soundonsound.com/sos/feb03/images/fig02beatingsaw.s.gif)][4]

Figure 2: (Right) One possible waveform generated by detuning two sawtooth waves.

[![](http://media.soundonsound.com/sos/feb03/images/fig03jp6vco1only.s.gif)][5]

Figure 3: A single sawtooth produces a boring buzz.

[![](http://media.soundonsound.com/sos/feb03/images/fig04jp6vco12.s.gif)][6]

Figure 4: Adding a second, detuned oscillator to the sound.

[![](http://media.soundonsound.com/sos/feb03/images/fig05jp6trilfo.s.gif)][7]

Figure 5: Adding pitch modulation to just one oscillator.

**Synthesizing The Ensemble Sound**

The sound in Figure 2 is still nothing like that of a string synth, although it's much more interesting than that of a single oscillator in isolation. So let's now ask two questions: Can we affect the thickened sound in Figure 2 to create something that sounds like an ensemble keyboard? And can we do this on an affordable analogue polysynth?

The answer is 'yes' in both cases, and, to illustrate this, I'm going to use a dual-oscillator polysynth that I happen to have by my left hand: the Roland Jupiter 6\.

I'll start by selecting the sawtooth waveform for VCO1, and I'll give it a pitch of 8'. If I turn the Mixer fully anticlockwise so that I hear just VCO1, and set the filter wide open with no enveloping and no modulation of any sort, the result proves to be a boring buzz, much like the cheapest, nastiest transistor organ imaginable (see Figure 3). So now I'm going to add the second, detuned oscillator to the patch, as shown in Figure 4\.

Setting VCO2 to be another sawtooth wave and detuning it with respect to VCO1, I find that --- contrary to what I wrote a few moments ago --- the result is still rather boring. Sure, there's a degree of movement imparted by the detune, but this isn't particularly impressive. Increasing the amount of detune increases the movement, but pretty soon the timbre starts to sound strange, with a weird 'off colour' timbre. This might be suitable for programming honky-tonk pianos, but it's quite inappropriate for emulating string ensembles.

Bearing this in mind, I'll choose a minimal amount of detune, and use the triangle wave produced by LFO1 to add a little vibrato to VCO1 (see Figure 5, above). Does this improve matters? Yes, it does, especially when the beat frequency of the detune is different from the LFO speed. Whereas VCO1 in isolation has been transformed from a boring buzz into a wobbly boring buzz, and VCO2 remains a boring buzz, the mixed sound --- which, to be honest, is still horribly buzzy --- has assumed a richer tone than before. So far, so good...

**Multiple Sine Waves & Modulation**

As we know, ensemble sounds require a great deal of modulation... far more than the simple vibratos and tremolos generated by a single LFO. Ideally, we would like to modulate each oscillator in an ensemble patch independently so that the differences in their frequencies are varying in a convoluted fashion. Unfortunately, this is rarely possible on affordable synths of any kind. But you might wonder whether it's possible to leave one oscillator unaffected and modulate the other in a more complex way that will fool the ear into thinking that there are multiple modulations present. After all, surely you don't need banks of LFOs to create complex modulation waveforms? It seems reasonable to speculate that we could take a single sine wave, direct it down a number of signal paths, delay some with respect to others (ie. change their phases) and mess with their amplitude before mixing the various elements to generate complex waveforms.

Sadly, this is not the case. I can demonstrate this by taking the simple sine wave in the first diagram below, and adding another instance of the same waveform as shown in the next diagram. As you would expect, the result is another sine wave, but with double the amplitude.

I'll now offset one of the waves in this second diagram by shifting its phase relative to the other. Intuitively, we might now expect a 'wiggly' waveform, but the third diagram (see or below) shows that the output is another sine wave. Well, how about giving one wave a greater amplitude than the other, as shown in the fourth diagram No... the output remains a sine wave. If fact, we can continue to add as many sine waves as we wish, and with whatever phases and amplitudes as we wish, but if their frequencies are the same, the result is always another sine wave. If we want to generate more interesting waveforms we must mix two sine waves of different frequencies, as shown in the fifth diagram.

We can make the modulating waveform in the fifth diagram even more complex if we add a third (or fourth, or fifth...) sine wave, as shown in the last diagram in this box. The output then loses all semblance of periodicity and, depending upon the ratios of the frequencies of the components, it may not repeat for the whole duration of a given piece of music. This means that the modulator is --- as far as we can hear --- aperiodic, which can be useful when we program sounds with a quasi-random or 'human' element within them.

Sadly (again), it's rare to encounter an analogue polysynth with such modulation capabilities. Roland's Jupiter 6, however, is one of very few analogue polysynths that has this ability. In addition to LFO1, you can apply the performance modulator, LFO2, to the VCO1 pitch, and then set VCO2 to 'Low', and apply it as a third LFO using the Manual Cross Mod slider in the VCO1 control panel. However, we will not make use of this in this month's patch because, in using VCO2 as an LFO, we lose the ability to create the detuned sound that is vital to the ensemble sound.

[![](http://media.soundonsound.com/sos/feb03/images/figb11lfos.s.gif)][8]

A simple sine-wave LFO.
[![](http://media.soundonsound.com/sos/feb03/images/figb32lfosoffset.s.gif)][9]

Adding out-of-phase sine waves creates... another sine wave.
[![](http://media.soundonsound.com/sos/feb03/images/figb52lfosampldf.s.gif)][10]

Adding two sine waves of different frequencies generates more complex waveforms.

[![](http://media.soundonsound.com/sos/feb03/images/figb22lfos.s.gif)][11]

Adding identical sine waves creates... another sine wave.
[![](http://media.soundonsound.com/sos/feb03/images/figb42lfosamploff.s.gif)][12]

Adding out-of-phase sine waves of different amplitudes creates... another sine wave.
[![](http://media.soundonsound.com/sos/feb03/images/figb63lfosampldf.s.gif)][13]

Adding three sine waves of different frequencies further complicates the output.

**Humanising The Sound**

The reason for the improvement in the tone is simple to describe, although it would be a nightmare to illustrate. In brief, the LFO is altering the amount of detune between VCO1 and VCO2, thus changing the rate of the modulation shown in Figure 2\. It is this that our ears hear as the further thickening of the sound. However, when you listen to the patch more carefully, you will hear an unnaturally regular modulation within it. This is caused by the constant nature of the triangular output from the LFO and, while it is not unpleasant, it would be interesting to see whether we can eliminate it without damaging the detuned effect itself.

[![](http://media.soundonsound.com/sos/feb03/images/fig06sh.s.gif)][14]

Figure 6: A simple representation of a 'random' circuit.

[![](http://media.soundonsound.com/sos/feb03/images/fig07shwaveform.s.gif)][15]

Figure 7: The output from a S&H module with noise as the source waveform.

[![](http://media.soundonsound.com/sos/feb03/images/fig08jp6random.s.gif)][16]

Figure 8: Selecting a random wave for the VCO1 modulator.

[![](http://media.soundonsound.com/sos/feb03/images/fig09trapezoid.s.gif)][17]

Figure 9: The trapezoid envelope shape for the VCA.

[![](http://media.soundonsound.com/sos/feb03/images/fig10jp6vcfvca.s.gif)][18]

Figure 10: The VCF and VCA sections for our string-synth patch.

When the synth in question has a single LFO limited to simple waveforms, there's nothing we can do. However, the Jupiter 6 offers an LFO setting called Random. This is a sample & hold generator whose clock rate is the LFO rate, and whose sample source is an invisible noise generator (see Figure 6, below).

Let me now direct you back to _SOS_ August 2000, and the instalment of this series therein. Alternatively, head for [www.soundonsound.com/sos/aug00/articles/synthsec.htm][19]. This article illustrated how the sample & hold circuit extracts samples from a varying waveform. If the source is a noise generator, the output looks much like the blue waveform in Figure 7 (above)... and it is this that Random offers you.

Now, I'd like to refer you to the box on modulation on the previous page, and in particular to the last diagram in the box, which shows a waveform similar to the output in Figure 7\. Sure, the Random output is 'square' rather than smooth, but the essential character is the same. This implies that we can use Random to modulate VCO1 and remove the predictable nature of the interactions between the oscillators.

If you make this change, as shown in Figure 8 (above) you will hear that the essential nature of the sound remains the same, but that there is now no periodic modulation. If you increase the LFO Depth too far, you will hear the pitch of VCO1 jump around in a most unnatural fashion, but with minimal modulation, the 'square' nature of the Random setting is masked and we hear something that sounds thick and unstable... 'analogue', or perhaps 'human', whichever way you look at it.

**Shaping The Sound**

Having programmed the above, we can now proceed to shape the sound using the filter, amplifier and envelopes. Given that you may not be following this exercise on a Jupiter 6, I can't give you precise settings for the other controls, but I can point you in the right direction with the following pointers:  
![](http://media.soundonsound.com/images/regulars/bulbow.gif) If your polysynth is velocity-sensitive, all "Dynamics' parameters should be set to 'Off'. String synths were not velocity-sensitive, so this patch should be likewise.  
![](http://media.soundonsound.com/images/regulars/bulbow.gif) In general, the low-pass filter should be about halfway closed, with a moderate amount of key-follow (ie. so that the sound becomes somewhat brighter as you move up the keyboard). There should be no filter modulation.  
![](http://media.soundonsound.com/images/regulars/bulbow.gif) The VCA Gain should be shaped by a trapezoid contour that generates the crescendo, as well as the extended tail of the sound (see Figure 9 below).

Figure 10 (below) shows the VCF and VCA sections of the Jupiter 6 set up appropriately.

Your patch should now sound like a typical 'pad', the type that I often call a 'carpet' because it is used to provide a thick, fuzzy foundation for many songs. Nonetheless, the sound still lacks the depth and character of a true string synth.

With many polysynths, this will be as close as you can get to the ensemble sound, and, if you're using one of these and still require an extra 'sheen', your only recourse will now be to use an external chorus unit. This does not need to be expensive, and my favourite mono in/stereo out chorus pedal, the Roland Dimension C, turns variations of this patch into all manner of classy string sounds, such as the ARP Omni strings from Pink Floyd's 'Shine On You Crazy Diamond'.

But to me, this feels like 'cheating' of a kind. I still want to see whether I can create Freeman's string ensemble sound without using effects, as he did, so I'm now going to invoke another trick that the Jupiter 6 has tucked up its electronic sleeves...

**Pulse Width Modulation**

I mentioned in passing near the start of this article that many synths allow you to mix the waveforms produced by each oscillator, and the Jupiter 6 is one of these. This means that we can mix the sawtooth waves and Pulse Width Modulated (PWM) pulse waves produced by each of VCO1 and VCO2\. 

Figure 11 (below) shows the PWM waveform generated by using a triangle wave to modulate the duty cycle of a pulse wave between 50 percent (a square wave) and about five percent. You may recall from earlier instalments of this series (see _SOS_ February 2000, or go to: [www.soundonsound.com/sos/feb00/articles/synthsecrets.htm][20]) that at any given moment, the harmonic content of a pulse wave is dependent upon this 'duty cycle': ie. the ratio of the length of the flat bit at the top of the wave to the length of the bottom bit. Consequently, the harmonic content of the PWM wave is continuously changing, and many writers have stated that this is why PWM waves have a more interesting sound than those produced by static waveforms. 

[![](http://media.soundonsound.com/sos/feb03/images/fig11pwmwaveform.s.gif)][21]

Figure 11: A pulse-width-modulated pulse wave.

[![](http://media.soundonsound.com/sos/feb03/images/fig12pwmpitch.s.gif)][22]

Figure 12: A PWM wave generates two pitches simultaneously.

[![](http://media.soundonsound.com/sos/feb03/images/fig13sawpwm.s.gif)][23]

Figure 13: Mixing two detuned PWM waves to generate four pitches simultaneously.

[![](http://media.soundonsound.com/sos/feb03/images/fig14jp6pwm.s.gif)][24]

Figure 14: Using pulse-width modulation to create an even richer ensemble sound.

To be fair, the changing harmonic content is one of the visible consequences of the underlying reason behind the lush sound of PWM waves, but there's more to it than that. This is a complex topic in its own right, so I will return to it next month. But for now, take my word for the following.

Pulse waves whose widths are modulated by triangle waves have another, rarely appreciated characteristic; they exhibit pitch modulation that oscillates at the PWM rate above and below the true oscillator pitch. If you have a suitable synth to hand, it's easy to hear this at low oscillator pitches and high modulation depths but, if not, I'll ask you to take my word for it that a PWM wave generated by a single oscillator exhibits _two_ pitches, as shown in Figure 12\. It is easy to see that these detuned pitches will give the PWM wave its characteristic 'chorused' sound.

Since the Jupiter 6 has two oscillators with PWM settings, we can detune and mix these to create the sound represented in Figure 13\. There are now four pitches in the output, so it's easy to believe that the result will be far richer than anything we have created so far (if we could modulate the oscillators with independent rates and depths, that would be even better... but let's not get carried away).

To create this sound, we return LFO1 to a triangle wave, increase the rate slightly, and then apply the pulse-width modulation to the oscillators using the PWM slider and LFO button in the PWM section. Listening to the result, I find that it has a slightly 'hollow' flavour, so we can now invoke the Jupiter 6's ability to mix both pairs of sawtooth and PWM waves by pressing the sawtooth and PWM buttons simultaneously on VCO1 and VCO2 (see Figure 14).

Direct the output from this through the VCF and VCA settings in Figure 10, and... Bingo! It's thick, it's lush, and it's certainly an ensemble sound. Of course, it sounds nothing like real orchestral strings, but that's not the point. As most keyboard players have discovered over the past three-and-a-bit decades, string synths have a characteristic sound all their own, and it's one that has musical uses just as valid as any other instrument.

Before saving or leaving this patch, there's nothing stopping you from passing it through a chorus unit to make it even richer. You might also like to lower VCO2 by an octave because this adds 'weight' without changing the fundamental character of the sound. Alternatively, you could increase the Attack and Release settings in ENV2 for slow, dreamy pads. Or you could... Oh heck, there are thousands of variations. Discover them for yourself!

Now, I'll admit that, in using pulse-width modulation, I've strayed beyond Ken Freeman's original ideas, but I have no remorse... There is no alternative if you want to get the Jupiter 6 to jump through this particular hoop. Interestingly, the Roland Super JX10 (which I used to help illustrate my piano sounds over the past few months) is capable of a far better ensemble sound than the Jupiter 6, and its architecture doesn't include pulse-width modulation. I would love to show you how, but I've already used up all my space this month, so I'll have to leave that to another day. [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][25]

[0]: http://www.soundonsound.com/sos/Feb03/articles/synthsecrets46.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://www.soundonsound.com/sos/dec00/articles/synthsec.asp
[3]: http://media.soundonsound.com/sos/feb03/images/fig01beating.l.gif
[4]: http://media.soundonsound.com/sos/feb03/images/fig02beatingsaw.l.gif
[5]: http://media.soundonsound.com/sos/feb03/images/fig03jp6vco1only.l.gif
[6]: http://media.soundonsound.com/sos/feb03/images/fig04jp6vco12.l.gif
[7]: http://media.soundonsound.com/sos/feb03/images/fig05jp6trilfo.l.gif
[8]: http://media.soundonsound.com/sos/feb03/images/figb11lfos.l.gif
[9]: http://media.soundonsound.com/sos/feb03/images/figb32lfosoffset.l.gif
[10]: http://media.soundonsound.com/sos/feb03/images/figb52lfosampldf.l.gif
[11]: http://media.soundonsound.com/sos/feb03/images/figb22lfos.l.gif
[12]: http://media.soundonsound.com/sos/feb03/images/figb42lfosamploff.l.gif
[13]: http://media.soundonsound.com/sos/feb03/images/figb63lfosampldf.l.gif
[14]: http://media.soundonsound.com/sos/feb03/images/fig06sh.l.gif
[15]: http://media.soundonsound.com/sos/feb03/images/fig07shwaveform.l.gif
[16]: http://media.soundonsound.com/sos/feb03/images/fig08jp6random.l.gif
[17]: http://media.soundonsound.com/sos/feb03/images/fig09trapezoid.l.gif
[18]: http://media.soundonsound.com/sos/feb03/images/fig10jp6vcfvca.l.gif
[19]: http://www.soundonsound.com/sos/aug00/articles/synthsec.htm
[20]: http://www.soundonsound.com/sos/feb00/articles/synthsecrets.htm
[21]: http://media.soundonsound.com/sos/feb03/images/fig11pwmwaveform.l.gif
[22]: http://media.soundonsound.com/sos/feb03/images/fig12pwmpitch.l.gif
[23]: http://media.soundonsound.com/sos/feb03/images/fig13sawpwm.l.gif
[24]: http://media.soundonsound.com/sos/feb03/images/fig14jp6pwm.l.gif
[25]: http://www.soundonsound.com