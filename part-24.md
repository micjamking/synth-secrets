# Synth Secrets, Part 24: Synthesizing Wind Instruments  
_Original article: [http://www.soundonsound.com/sos/apr01/articles/synthsecrets.asp][0]_

[![](http://media.soundonsound.com/sos/apr01/images/fig01astretchedstring.s.gif)  
][1]Figure 1(a): The stretched string.

**Gordon Reid** embarks on a journey to synthesize convincing woodwind and brass. This month, he considers how these instruments make their sounds in real life. This is the 24th article in a 63-part series. Read [all parts][2].

At the end of the last Synth Secrets, I promised that we would start looking at the synthesis of traditional instruments. And that's what we're going to do this month, starting with wind instruments. But don't imagine for a moment that I'm going to draw a couple of block diagrams, tell you to set this voltage-controlled wotsit to that value, and spoon-feed you a couple of simple synth patches. After all, if you understand the nature of a sound, you can make huge leaps forward in synthesizing it. This is true whether you are synthesizing orchestral instruments, human voices, or vibrating columns of air in pipes, which is essentially what wind instruments are. So with this in mind, let's turn our thoughts to oscillating bodies...

**Of Strings & Pipes**

Cast your mind back to the first part of this series (see SOS May '99 or [_www.soundonsound.com/sos/may99/articles/synthsec.htm_][3]). If you're old enough, you'll remember that we started all this by considering the nature of a stretched string fixed between two points, and why it prefers to vibrate at certain frequencies that we call 'harmonics'. Figure 1(a) shows such a string, oscillating at its fundamental mode of vibration. Just to remind you, Figures 1(b) and 1(c) show the second and third such modes of vibration.

[![](http://media.soundonsound.com/sos/apr01/images/fig01bstring2ndharmonic.s.gif)  
][4]Figure 1(b): The second mode of vibration of a stretched string.[  
![](http://media.soundonsound.com/sos/apr01/images/fig01cstring3ndharmonic.s.gif)  
][5]Figure 1(c): The third mode of vibration of a stretched string.

Without repeating all of the first Synth Secrets article here, we know that the second harmonic oscillates at twice the frequency of the first, that the third oscillates at three times the frequency of the first... and so on. In fact, a perfect stretched string can, in theory (although not in reality), generate the complete harmonic series from 1 to infinity, and the amplitudes of each of them will determine the shape of the audio waveform thus produced. For example, if the amplitude of any harmonic 'n' is 1/n times that of the fundamental, we obtain a sawtooth wave. Alternatively, if the amplitude of any odd-numbered harmonic 'n' is 1/n times that of the fundamental, but all the even harmonics are missing, we obtain a square wave. But what has this got to do with pipes? Well... rather a lot, as we shall see.

Let's now consider the open rigid pipe shown in Figure 2\. As the pipe isn't suspended in a vacuum, it has a column of air inside it. It might appear that the air can enter and exit without anything special happening; however, as you know from everyday experience, if you blow across the top of such a pipe, it will generate a pleasant note. You may therefore assume (correctly) that the air inside it is oscillating in such a way as to produce a harmonic series. But how?

[![](http://media.soundonsound.com/sos/apr01/images/fig02apipe.s.gif)  
][6]Figure 2: Air moving through a pipe.

Imagine that you put the tube to your mouth and blow a single, almost instantaneous puff of air into it. In doing so, you create a pulse of higher pressure at one end. The high-pressure pulse passes through the pipe until it reaches the far end, at which point you might expect it to leave the pipe and vanish --- but the reality is very different. Far from being released, most of the energy is reflected back into the pipe, almost as if it had bounced off an invisible wall. Likewise, when the reflected pulse reaches the other end, most of the energy is again reflected inwards, and this continues until all the energy is dissipated.

It's hard to explain in words, but the reason pipes produce a harmonic series is very similar to the reason why strings do. A string has to be fixed at both ends for harmonic motion to occur; this is called a boundary condition. The pipe has an analogous condition: the pressure of the atmosphere outside the pipe is, well, the pressure of the atmosphere. Therefore, the pressure at the precise ends of the pipe must also be the local atmospheric pressure, or else all the air would either rush out of, or into, the pipe itself.

[![](http://media.soundonsound.com/sos/apr01/images/fig03pressureinpipe.s.gif)  
][7]Figure 3(a): The pressure of the initial pulse, and that of the reflected pulse in a simple pipe.[  
![](http://media.soundonsound.com/sos/apr01/images/fig03b2ndpipeharmonic.s.gif)  
][8]Figure 3(b) (above) and 3(c) (below): The second and third harmonics of an open pipe.  
[![](http://media.soundonsound.com/sos/apr01/images/fig03c3rdpipeharmonic.s.gif)][9]

It's a reasonable guess, therefore, to assume that --- given the right type of blowing --- the maximum positive pressure in the pipe will occur at the centre, as will the maximum negative pressure of the reflected pulse. These are the conditions under which a standing wave can occur, as I've tried to make clear in Figure 3(a).

As you can see, this is a very similar diagram to Figure 1(a), representing the stretched string. Having read the first part of Synth Secrets, you shouldn't find it requires a great leap of understanding to realise that Figure 3(a) represents the fundamental frequency of the pipe. What's more, it's easy to see what the wavelength is... the pressure pulse must travel both down and back up the pipe to complete one cycle, so the wavelength of the fundamental is twice the length of the pipe.

So, for example, if the pipe is 0.34 metres in length, and given that the speed of sound is 340m per second, the pulse will travel down the pipe in a thousandth of a second (1mS). It will then pass back up, also in a thousandth of a second, so the period is 2mS, and the frequency of the fundamental is therefore 500Hz. Do these figures look familiar? They should, because they're identical to our example of a resonant body in part 22 of Synth Secrets.

There's another way in which a pipe is very much like a plucked string... provided that the boundary conditions are met, many different modes of vibration are possible within it. Figures 3(b) and 3(c) represent the second and third harmonics of the pipe. Again, the similarity to the stretched string is startling, and like the string, the pipe will support many such modes simultaneously. Indeed, since every harmonic is possible, we could even envisage situations where pipes produce sawtooth waves and many other complex tones.

**Closing The Pipe**

Despite all this, we have not reached the point where we can discuss pipes as musical instruments. This is because the oscillations within them have --- apart from a brief, hypothetical puff across one end of the pipe --- appeared as by magic, with no visible means of generating and sustaining the standing waves I have described. In other words, there is no realistic energising mechanism in this description. So now we must add a means to give energy to the column of air, and to sustain the standing wave within it.

This mechanism is you... or, rather, those people who can play a wind instrument. And the means by which they do so is by blowing into a mouthpiece. But if you are a total novice and try to do this, you will probably be unable to produce a pure note. What's more, you will find that your lips tingle after just a few seconds, and this can be a bit uncomfortable. The reason for is quite unexpected... you may believe that you are blowing a continuous stream of air down the pipe but, in fact, you're producing a stream of pressure pulses. Your lips are, therefore, acting as a valve, creating short pulses of high-pressure air, each followed by a lull before the next. If the timing of these pulses is appropriate to the length of the pipe (and therefore the wavelength, and therefore the fundamental frequency or a harmonic) you will produce a note. If not, a strangled fart is most likely to ensue. Good players control this timing by regulating the tension of their lips and the air pressure in their mouths. Bad players are unable to do this, and we've all heard the results of that.

[![](http://media.soundonsound.com/sos/apr01/images/fig04blowingapipe.s.gif)  
][10]Figure 4(a): The pressure in a blown pipe.[  
![](http://media.soundonsound.com/sos/apr01/images/fig04bclosed3rdharmonic.s.gif)  
][11]Figure 4(b) and 4(c): The second and third modes of vibration in a closed pipe.  
[![](http://media.soundonsound.com/sos/apr01/images/fig04cclosed5thharmonic.s.gif)][12]

If you think that this is all straightforward, it isn't. By placing your gob over one end, you're changing something fundamental (no pun intended) about the properties of the pipe. To be precise... you're closing one end. This means that the boundary conditions have changed, and we can no longer trust our previous analysis.

Fortunately, it's not hard to understand the changed response of the pipe. If you look at Figure 4(a), you'll see that the boundary condition at the right-hand end is unchanged. The pipe is still open here, and the pressure differential (compared to the outside atmosphere) must still be zero. However, the closed end (ie. where you blow) is now a region of maximum pressure, and the fundamental waveform now appears as shown in Figure 4(a).

I should warn you that this is a crude way of describing a complex phenomenon, but it nonetheless suggests a very important consequence of blowing into a pipe. Whereas the air only needed to flow down and back up the pipe once to complete a cycle in an open pipe, it needs to complete the round trip twice in a closed pipe. This means that the wavelength of the fundamental is now four times the length of the pipe, rather than double! The musical consequence of this is obvious: the closed pipe produces a note one octave lower than you would otherwise expect. Given our 34cm pipe, the wavelength is now 136cm (instead of 68cm as before), so the fundamental lies at 250Hz rather than 500Hz.

You might ask whether there are any other changes caused by closing one end of the pipe, and you would be wise to do so. Let's look at the second and third modes of vibration, just as we did for the open pipe in figures 3(b) and 3(c).

By studying figures 4(b) and 4(c) you'll see that, in 4(b), one length of the pipe holds three-quarters of a full wavelength. For the next mode, shown in 4(c), one length of the pipe contains 5/4 (ie. one and a quarter) wavelengths. This means that the wavelength at 2/4ths, 4/4ths, 6/4ths (and so on) are missing in a closed pipe. In other words, unlike an open pipe, a closed pipe produces only odd harmonics!

**The Characteristics Of Wind Instruments**

OK, that's enough theory for the moment. Let's now ask ourselves how we can use this knowledge to understand and synthesize monophonic wind instruments.

[![](http://media.soundonsound.com/sos/apr01/images/fig05therecorder.s.gif)  
][13]Figure 5: The recorder.

Let's start with the simplest of all such instruments... the recorder. In this, instead of using your lips to excite the air, you blow into the mouthpiece and an open edge creates the pulses that set up the standing waves within the pipe. The consequence of this is that the recorder is, to all intents and purposes, an open pipe. It has a fundamental wavelength of twice the distance from the edge to the end of the bore, and produces all the overtones in the harmonic series (see Figure 5). This suggests that a sawtooth wave or a triangle wave would be suitable for synthesizing the recorder.

Now let's move on to a more complex instrument, the clarinet. Ignoring for the moment the holes along its length and the small 'bell' at its end, this is another cylindrical tube. However, instead of having an edge to cut the air and set up the vibrations, it uses a single reed that acts in the same fashion as the 'lip valve' I described above. Since it is, therefore, a closed pipe, we might expect it to produce a waveform that contains only odd harmonics, and whose lowest note has a fundamental wavelength of four times the length of the instrument. And we would be right. The clarinet has a very distinctive 'hollow' sound which, on a synthesizer, we associate with square waves... the only common synthesizer waveform that contains just odd harmonics.

[![](http://media.soundonsound.com/sos/apr01/images/fig0610harmonicsawtooth.s.gif)  
][14]Figures 6 (above) and 7 (below): Two very different waveforms derived from the same 10 harmonics.  
[![](http://media.soundonsound.com/sos/apr01/images/fig07anotherwaveform.s.gif)][15]

The difference in harmonic structure between the recorder and the clarinet has an interesting consequence. If you 'over-blow' a recorder (ie. blow harder than is necessary to create the standing wave of the fundamental) you will eventually make it jump up a mode, so that the second harmonic becomes the lowest pitch produced. If the fundamental is, say, C3, the first overblown note will be C4, followed by G4, C5, E5... and so on up the complete harmonic series. In contrast, the first overtone of the clarinet is the third harmonic, and the second is the fifth harmonic, so the equivalent series will be C3, G4, E5... and so on. 

Now let's turn our attention to the brass family... instruments such as bugles, cornets, trumpets, trombones, and tubas. These are 'lip-valve' closed pipes, so we might expect them to act and sound like the clarinet, producing odd harmonics only, and having a characteristic 'hollow' timbre. But experience tells us that these instruments are very brash, and that the square wave is quite unsuitable for synthesizing them. Indeed, if ever there was a family of sounds that demanded the use of the sawtooth wave, this is it. So what's gone wrong with our analysis?

The answer is to be found in the bore of the instrument. The recorder and the clarinet are cylindrical pipes, whereas much of the bore of a brass instrument is conical. Does this make a difference? You bet it does... Apart from the open pipe, there are two shapes of bore that generate the complete harmonic series. One is the cone, and the other is the flare --- a geometric shape in which the radius of the bore increases by a constant factor for each doubling of the length of the pipe.

**More About Harmonics**

Of the three instruments described, only the clarinet acts like a closed pipe. This suggests that the recorder and the trumpet --- both of which produce the full harmonic series --- should sound dissimilar to the clarinet, but quite similar to each other. In practice, experience tells us that this is far from true, so how can we further differentiate between them?

[![](http://media.soundonsound.com/sos/apr01/images/fig08quietvsloud.s.gif)  
][16]Figure 8: The harmonic structures of the same note played quietly and loudly on the same instrument.

Consider Figures 6 and 7\. These depict single cycles of very different waveforms, but both are constructed from the same 10 harmonics. In the first case, I have given them amplitudes that conform to the 1/n relationship that defines a sawtooth wave and, as you can see, the result is very similar to an ideal sawtooth wave. However, in the second example I have chosen a handful of amplitudes at random. The number of harmonics and their frequencies are identical in both Figures... just the relative amplitudes are different. As you might expect, these waveforms not only look very different, but they sound very different too.

So it's not enough to know just the number and type of harmonics present in a sound, we also need to know the relative strengths if we are to analyse and recreate the correct timbre. To illustrate this, I've drawn Figure 8, which shows the relative strengths of the first 20 harmonics of the same note played both quietly and loudly on the same brass instrument. You can learn a lot from this diagram. For example, the fundamental is the dominant harmonic of the quiet note, so you hear this as the perceived note. In contrast, the eighth harmonic is dominant in the over-blown note; you would hear this as a squawk three octaves higher than the fundamental. Also, the quiet note contains just six harmonics, making it 'soft', whereas the loud note includes significant amplitudes of at least 15 harmonics so, quite ignoring the additional loudness of the note, the sound is brighter.

[![](http://media.soundonsound.com/sos/apr01/images/fig09lowvshigh.s.gif)  
][17]Figure 9: The harmonic structures of a low-pitched note and a high-pitched note played with the same amplitude.

We can extend our analysis still further to ask how the harmonic structures of the notes change, not when we play them louder of softer, but higher or lower in pitch. Analysis (and Figure 9) shows that lower notes appear to have more complex harmonic structures than higher ones. But maybe this isn't so strange. You would expect the lump of resonating metal, wood and air in your hands to have a finite frequency response, with the result that there's less 'room' for the harmonics of higher-pitched fundamentals. Furthermore, much of the equipment used to perform measurements of this type is similarly limited (how high does your microphone go?), so it's a moot point to discuss whether an instrument's harmonics reach 25kHz, 30kHz, 50kHz... or whatever. A typical microphone won't detect these frequencies, the sound system replaying your synthesized sound won't reproduce them, and you wouldn't hear them even if they were there!

**Other Components Of The Sound**

By this point, you must be getting pretty tired of all this talk of harmonic structures. But ask yourself this: when you choose an oscillator waveform on a synth, the type of filter and its cutoff frequency, the amount of filter resonance, and the nature of any contour generators or modulators applied to the cutoff and resonance... what are you really doing? The answer is... you're determining the harmonic content of the sound you're synthesizing. So let's end this month by considering some of the factors we need to consider when we synthesize a trumpet (see Figure 10).

[![](http://media.soundonsound.com/sos/apr01/images/fig10thebasisofatrumpet.s.gif)  
][18]Figure 10: Synthesizing some of the fundamental characteristics of a trumpet.

• Firstly, we now know that a trumpet produces a complete harmonic series with significant amplitudes of higher harmonics present. Only one common waveform fits the bill; we must set our oscillators to produce a sawtooth wave.

• Secondly, we know that, as the note gets louder, it contains more harmonics, so we must set up a low-pass filter whose cutoff frequency rises and falls as the loudness of the note increases and decreases, respectively.

• Thirdly, we know that the relative amplitude of the lower harmonics decrease as the note gets louder. This means that we must introduce filter resonance (or some other form of EQ) that emphasises higher harmonics as the loudness of the note increases.

• Fourthly, we know that a high note has fewer harmonics than a low note, so we must set up our filter tracking such that, as the pitch rises, the cutoff frequency rises more slowly, thus tapering the harmonic series.

If we do all of this, we have a chance of creating a tone that is reminiscent of the trumpet we are trying to emulate. Sure, we've yet to consider the transient response at the start of the note, or any changes in amplitude and brightness that occur as we sustain and release the note. Furthermore, we've ignored all forms of modulation and expression, as well as the formants of the real instrument. But this is not a problem. We can --- and will --- do these things...

Next month, we'll look at other attributes of brass and woodwind sounds, and put together a few basic --- and not so basic --- analogue synth patches to emulate them. Until then... [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][19]

[0]: http://www.soundonsound.com/sos/apr01/articles/synthsecrets.asp
[1]: http://media.soundonsound.com/sos/apr01/images/fig01astretchedstring.l.gif
[2]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[3]: http://www.soundonsound.com/sos/may99/articles/synthsec.htm
[4]: http://media.soundonsound.com/sos/apr01/images/fig01bstring2ndharmonic.l.gif
[5]: http://media.soundonsound.com/sos/apr01/images/fig01cstring3ndharmonic.l.gif
[6]: http://media.soundonsound.com/sos/apr01/images/fig02apipe.l.gif
[7]: http://media.soundonsound.com/sos/apr01/images/fig03pressureinpipe.l.gif
[8]: http://media.soundonsound.com/sos/apr01/images/fig03b2ndpipeharmonic.l.gif
[9]: http://media.soundonsound.com/sos/apr01/images/fig03c3rdpipeharmonic.l.gif
[10]: http://media.soundonsound.com/sos/apr01/images/fig04blowingapipe.l.gif
[11]: http://media.soundonsound.com/sos/apr01/images/fig04bclosed3rdharmonic.l.gif
[12]: http://media.soundonsound.com/sos/apr01/images/fig04cclosed5thharmonic.l.gif
[13]: http://media.soundonsound.com/sos/apr01/images/fig05therecorder.l.gif
[14]: http://media.soundonsound.com/sos/apr01/images/fig0610harmonicsawtooth.l.gif
[15]: http://media.soundonsound.com/sos/apr01/images/fig07anotherwaveform.l.gif
[16]: http://media.soundonsound.com/sos/apr01/images/fig08quietvsloud.l.gif
[17]: http://media.soundonsound.com/sos/apr01/images/fig09lowvshigh.l.gif
[18]: http://media.soundonsound.com/sos/apr01/images/fig10thebasisofatrumpet.l.gif
[19]: http://www.soundonsound.com