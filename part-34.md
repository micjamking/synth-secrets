# SYNTH SECRETS  
_Original article: [http://www.soundonsound.com/sos/Feb02/articles/synthsecrets0202.asp][0]_

Moving from last month's theoretical bass drum synth patch to its practical application on affordable analogue synths, we also take a look at how the world's most famous drum machines produce this fundamental rhythm sound... This is the 34th article in a 63-part series. Read [all parts][1].

[![](http://media.soundonsound.com/sos/feb02/images/fig01abassdrum.s.gif)][2]

Figure 1(a): A patch to synthesize the bass drum.

[![](http://media.soundonsound.com/sos/feb02/images/fig01bbassdrum2.s.gif)][3] 

Figure 1(b): A simpler patch to synthesize the bass drum.

_

---

**Gordon Reid**_

Last month, we analysed the bass drum, ending up with a patch that synthesized all the important elements of its sound (see Figure 1(a), right). Given a synthesizer of appropriate power and flexibility, there's no reason why you shouldn't use this to create a wide range of powerful kick drum sounds. Indeed, with careful choices of VCO pitches and waveforms, filter characteristics, and contour rates, you can use this to synthesize a huge range of realistic and electronic percussion instruments.

Unfortunately, few of us have access to a synth capable of reproducing this patch, so I'm going to simplify it by replacing the FM generator in the upper-left corner with a noise source. When filtered appropriately, this will simulate the dense cluster of mid-frequency partials that the FM section generated. If I also assume that the pitch CV input on the VCO will have some form of level control, I can dispense with the attenuator and redraw the patch as Figure 1(b), shown right.

Unfortunately, simplified though this is, it's still too complex for the majority of analogue synthesizers. A Minimoog can't reproduce it, neither can a Roland SH101, an ARP Axxe, a Sequential Circuits Prophet 5, a Memorymoog, or even the semi-modular Korg MS20 and ARP 2600\. But it's well-known that people do coax superb kick drum sounds from all of these synths --- so how do they do it? That's what we're going to find out this month.

**Bass Drums On The Arp Axxe**

The ARP Axxe is perhaps the simplest of the synths named above, offering just a single oscillator, a single LFO, a single filter, and a single contour generator. I have drawn the block diagram for this synth in Figure 2\. Clearly, this lacks some of the modules present in both Figures 1(a) and 1(b) so, if we're going to be successful programming a bass drum on this, we're going to have to cut a few corners.

[![](http://media.soundonsound.com/sos/feb02/images/fig02axxeblockdiagram.s.gif)][4]

Figure 2: A block diagram of the important elements of the ARP Axxe.

[![](http://media.soundonsound.com/sos/feb02/images/fig03axxeusedelements.s.gif)][5] 

Figure 3: The elements used in the ARP Axxe bass drum patch.

[![](http://media.soundonsound.com/sos/feb02/images/fig04axxekickdrum.s.gif)][6] 

Figure 4: The pitch contour for the kick drum sound.

[![](http://media.soundonsound.com/sos/feb02/images/fig05axxefilteradsr.s.gif)][7] 

Figure 5: The VCF and ADSR settings for the Axxe kick drum sound.

[![](http://media.soundonsound.com/sos/feb02/images/fig06axxevcaadsr.s.gif)][8] 

Figure 6: The Axxe's VCA and ADSR settings.

[![](http://media.soundonsound.com/sos/feb02/images/fig07arpaxxekickdrum.s.gif)][9] 

Figure 7: The Axxe kick drum patch.

Let's start by getting rid of the things that we don't need. Nowhere last month did we discuss low-frequency modulation, and the Axxe's LFO won't oscillate at audio frequencies, so we can discard this and its associated VCA. Likewise, it's unlikely that we'll need pitch-bend, and we don't need to consider the keyboard CV, so these and their mixer can also disappear into the ether. That leaves a classic VCO/VCF/VCA signal path shaped by a single contour generator and two VCAs (see Figure 3, above).

Comparing this to Figure 1(b) --- let alone 1(a) --- you might imagine that there's little we can do to recreate the kick drum sound we want. But don't give up... all is not lost.

The most important thing that Figure 3 lacks is the ability to sweep the pitch of the VCO. However, the Axxe does offer a way to generate a tone with a downward sweep; we program this by setting the filter resonance to maximum, and using the contour generator to control the cutoff frequency. Since the Axxe's filter oscillates at high resonances, it produces something akin to a sine wave, and it is this that will sweep down in pitch as the contour progresses. So, knowing the contour we require (see Figure 4 below for a reminder) we can now set up the ADSR and VCF sections on the Axxe's front panel, as shown in Figure 5, above right.

Scanning Figure 5 from left to right, you can see that the filter resonance is at its maximum, and that the amount of ADSR sweep applied is approximately 50 percent. There's no theoretical reason for choosing 50 percent... it's simply the setting that sounds good to me. You should also note that the filter's initial cutoff frequency is at its minimum, ensuring that the sweep ends at a very low frequency. For the same reason, there's no keyboard CV applied, and the LFO-to-VCF control is set to zero because we do not want the frequency to 'wobble' as it sweeps downwards.

Looking at the ADSR contour generator itself, you can see that (for reasons that I hope are obvious) the Attack time is zero. The Decay and Release times of approximately 50 percent are again empirical --- they sound right to me --- and they're the same length, so that the sound is consistent whether you keep the key pressed or not. Finally, the Sustain level is zero because the pitch of the drum always swoops down; it never 'sustains' at a single pitch.

Now, what about the amplitude curve of the sound? Last month I explained that that the pitch contour and the amplitude contour are likely to be the same, differing only in amount. This is very fortunate because, if it were not so, we would require a second contour generator, and the Axxe does not possess this. We therefore define the VCA response using the settings in Figure 6 (right). As you can see, we apply the full range of the ADSR to the VCA, and there is no initial VCA Gain, because this would stop the note decaying to silence.

Now for the cluster of middle frequencies in the kick drum sound. If we possessed more oscillators and signal paths, we could generate these in keeping with the scheme in Figure 1(a). But we don't, so we can't. The best we can do it to add the sawtooth and/or square waves plus some noise to the audio input of the filter. In theory, the saw and square add more harmonic content to the sound, and the noise adds something to emulate the cluster of enharmonic modes in the mid and upper frequencies. However, little of the signal presented to the input survives the path through the filter, so the output is largely unaffected by these signals.

We're now in a position to complete the Axxe kick drum patch (see Figure 7). Apart from what I've already mentioned, the only other thing to notice is that the Transpose switch is set to '-2 Octaves' so that the frequencies of the sawtooth and square waves are in the lowest register. And that's it... a beautifully simple and elegant patch which produces the classic 'analogue' kick drum sound. What's more, you can make it sound more realistic (ie. like a real drum, not a beatbox) by reducing the filter resonance a tad, thus allowing a little of the VCO through the VCF. This adds a subtle tonal quality that sounds much like the shell of the kick drum. Then, if you set the trigger to 'Auto Repeat', and the LFO frequency to 2Hz, you have a killer 120bpm beat that that's every bit as usable as those generated by dedicated drum machines.

**Bass Drums On The Roland SH101**

The Roland SH101 offers a similar architecture to the Axxe, so it's not surprising that its kick drum patch is almost identical to the one we have just discussed. Sure, there are differences in the values of the settings, but these are merely a consequence of the different circuitry used. The philosophy of the patch is identical, and it yields very similar results.

[![](http://media.soundonsound.com/sos/feb02/images/fig08sh101kickdrum1.s.gif)][10]

Figure 8: The SH101 kick drum.

[![](http://media.soundonsound.com/sos/feb02/images/fig09sh101kickdrum2.s.gif)][11] 

Figure 9: Another SH101 kick drum.

[![](http://media.soundonsound.com/sos/feb02/images/fig10sh101syndrum.s.gif)][12] 

Figure 10: The SH101 SynDrum.

So, we again set the VCF resonance to maximum, the cutoff frequency to minimum, and (in this case) the 'VCF Env' amount to about 60 percent. Likewise, the Decay and Release settings are in the region of '6'... and provided that all the other sliders are at zero, that's all there is to it, as shown in Figure 8 (right). If anything, this patch has more punch and depth than the Axxe's. This shouldn't be too surprising; ARP synths are renowned for their bright and fizzy sounds, not for warmth and thickness.

Tweaking Figure 8 yields numerous other bass drum sounds. For example, you can introduce some 16' sawtooth and/or the sub-oscillator to introduce a tonal quality to the sound. To do this, you increase the appropriate faders in the mixer, then reduce the 'VCF Env' amount and raise the cutoff frequency just far enough to let the lowest harmonics pass. You'll then need to adjust the contour to get just the right amount of 'ringing'. The result (shown in Figure 9 above) looks similar to Figure 8, but it has a distinctive quality that sets it apart from the previous patch.

If you program Figure 9, you will find that it is incredibly sensitive to tiny changes in the cutoff frequency, and moderately sensitive to changes of the Envelope amount and ADSR settings. This means that there are numerous variations on the theme, allowing you to create anything from huge, booming drums to tight, snappy ones. So, before leaving the SH101 behind, I'm going to take you back to Figure 8, and make just one change, increasing the 'VCF Kybd' (keyboard tracking) fader from zero to 100 percent (see Figure 10). If you do this, and play the notes at the top of the keyboard, you'll find that you have recreated the SynDrum, an early analogue percussion instrument dating from the late '70s. This makes the characteristic 'ray gun' sound that littered the electronic music of the era. It's perhaps the cheesiest percussion sound imaginable, and you'll love it!

**How Close To Theory?**

At this point, we should be able to look back to Figures 1(a) and 1(b) and see that the theory and our patches are broadly in line with one another. After all, if the Axxe and the SH101 were producing excellent bass drum sounds without a nod in the direction of last month's analysis, the academic approach would be a complete waste of time and rainforests. And it isn't.

[![](http://media.soundonsound.com/sos/feb02/images/fig11analysis.s.gif)][13]

Figure 11: Analysing the components in Figure 1(b).

[![](http://media.soundonsound.com/sos/feb02/images/fig12analysis2.s.gif)][14] 

Figure 12: How the Axxe and SH101 recreate the sound of Figure 1(b).

To perform this comparison, I'll remove the trigger from Figure 1(b), and then add some annotation to remind us which bit is doing what (see Figure 11). We should now be able to relate the theory to the settings that we have chosen.

Let's get rid of the easy stuff first. In each synth, the ADSR is providing the AR contour, and the audio VCA is responding to this as required. But what of the 'low-frequency components with downward frequency sweep'? This is the clever bit, where we replace the VCO and filter combination with the self-oscillating filter.

Next, we come to the noise module simulating the mid-frequency partials. We use the synths' noise generators for this but, as already noted, little of this sound passes to the output because of the action of the filter. Fortunately, this doesn't seem to matter, implying that the absence of the mid- and upper- frequencies does not impair our perception of the bass drum sound. 

This may seem to be in marked contradiction to my statements about the importance of the mid-range partials in the bass drum sound in last month's part of this series, but I suspect that there are valid reasons for this. Firstly, audio engineers now tend to emphasise the low frequencies of the bass drum sound --- whether the instrument is acoustic or synthesized. Secondly, I don't trust analogue synths, and I suspect that there are numerous low-amplitude, higher-frequency components present in the final sound (sure, we didn't ask for them, but they are introduced by distortion in the overdriven, oscillating filter and the VCA). Thirdly, we are so accustomed to electronic drums that we no longer fully appreciate the sound of a real bass drum. You can verify this easily. Load a high-quality concert bass drum sample and compare this to your synthesized sound. Now you can hear where the real mid and upper frequencies have gone.

Finally, there's the high-frequency click, and again we benefit from a sonic short cut. Because the attack of the ADSR is very rapid when the Attack is set to 0, the VCA creates a discontinuity at the start of the sound. For reasons we need not worry about, this discontinuity contains (or more properly _is_) a very short burst of high-frequency noise, and it's this that produces a click when the sound is triggered. I'm forever reading complaints on various on-line forums from players who bemoan the click at the start of their sounds, and write to ask whether their synths are faulty. Likewise, I've lost count of the number of times that I've answered this, explaining that it is the desirable consequence of truly snappy contour generators and VCAs.

Anyway, we can now redraw Figure 11 to show the manner in which the Axxe and SH101 produce the bass drum sound, creating Figure 12 (shown on the next page) in the process. This may look quite different from Figure 11, but the principles of the sound are identical, and it is this that allows us to develop patches for synthesizers more limited than Figures 1(a) and 1(b) would otherwise require.

**[![](http://media.soundonsound.com/sos/feb02/images/fig13tr909bd.s.gif)][15]

Figure 13: The Roland TR909 bass drum.

Classic Bass Drum Sounds 1: The Roland TR909**

No discussion of analogue bass-drum sounds could possibly be complete without studying the way in which Roland created the most used (and over-used) drum sounds of all time. These are, of course, the bass drums generated by the TR808 and TR909\.

We'll start with the TR909, because this is the one that most closely follows the principles that we have discussed (see Figure 13 --- and before anybody writes in to say that this doesn't look like Roland's schematic... you're right, I've laid it out differently).

Starting with the upper signal path, you can see that the oscillator produces a sawtooth wave whose pitch is defined by EG3, which has an instant Attack and slow Decay. The output from the oscillator then passes through a waveshaper. This removes almost all the overtones, transforming the sawtooth into something very close to a sine wave. This in turn passes through a VCA controlled by another contour generator (EG1) that provides the required AR envelope (the amplitude of EG1's Attack and its Decay rate are modified if the Accent voltage augments the Trigger).

[![](http://media.soundonsound.com/sos/feb02/images/synthss34bd99.s.gif)][16]

Analogue Solutions' BD99 909 kick drum synth module.

So far, so good... so let's now turn our attention to the lower audio path. This starts with a noise generator whose output passes through a low-pass filter to remove the high frequencies. The output from this is mixed with a short pulse (essentially a click) provided by the pulse generator, and the sum of the two is contoured by a VCA controlled by EG2\. Finally, a mixer combines the output from both the upper and lower signal paths to create the composite sound.

It may take a couple of moments to digest Figure 13, but once you have done so, it should be clear that Figure 1(b) and Figure 13 describe remarkably similar systems. Sure, there are detailed differences, but the fundamental ideas and patch structure are common to both.

Some synth fanatics dig deeply into the electronics of their TR909s to add additional controls for each element of the patch in Figure 13\. However, if you don't fancy doing this, you could buy an Analogue Solutions BD99 (shown below left), a module that duplicates Roland's original circuitry, but provides a number of additional facilities.

For example, you can tune the basic pitch of the VCO (something that was not possible on the TR909). You can also control the amount of 'click' heard at the start of the note (the Attack level of EG2) and the Decay time for the sound (the Decay rates of EG1 and EG2). You can even apply varying amounts of Accent using the input provided, and control the pitch of the VCO using a CV.

Of course, none of this alters the basic principles we have discussed... these controls simply allow you to change some of the parameters that define the exact nature of the sound. But what a difference this can make. Many percussion instruments share common principles, so you can leave the domain of bass drums far behind, and use the BD99 to produce sounds such as toms and congas too.

**[![](http://media.soundonsound.com/sos/feb02/images/fig14tr808bd.s.gif)][17]

Figure 14: The Roland TR808 bass drum.

[![](http://media.soundonsound.com/sos/feb02/images/fig15decayingsine.s.gif)][18] 

Figure 15: The conventional signal path: trigger, envelope, oscillator, and amplifier.

[![](http://media.soundonsound.com/sos/feb02/images/fig16bridgedt.s.gif)][19] 

Figure 16: An oscillator that decays to silence on its own. 

Classic Kick Drum Sounds 2: The Roland TR808**

Given that many people lump the TR808 and TR909 together, you may be surprised to discover that they generate their sounds in entirely different ways. Indeed, whereas the TR909 kick drum is virtually a synthesizer in its own right, the TR808's is a far simpler --- and in many ways far cleverer --- bit of electronics.

Figure 14 (above) shows the block diagram for the TR808 bass drum and its slightly more advanced Analogue Solutions progeny, the BD88\. As you can see, it lacks the multiple signal paths we have discussed, has no noise generator, and no contour generators. So how does it produce the sound we want? To answer this, we must look at the type of oscillator used in the circuit. It is called a 'Bridged T-network', and it is quite unlike any oscillator that we have encountered before in Synth Secrets.

Consider the oscillators in your analogue synthesizers, whether monophonic, polyphonic, paraphonic... or whatever. All these synths' oscillators produce their outputs continuously, and whether we hear them or not is determined by the action of VCAs controlled by contour generators which are themselves initiated by triggers, as shown in Figure 15 below (if you connect the output from a conventional oscillator directly into a PA system, it will howl at you unceasingly until you pull out the plug).

Now cast your minds back to junior school. Did you annoy your teacher by holding your ruler hard against the desktop before flicking it to go "booooiiiiiigggggg"? If you did, you were using an oscillator that, once excited, produced a sound that decayed to silence, yet did so without _any_ contour generators or amplifiers.

It should come as no surprise to learn that some electronic circuits respond in the same way. The Bridged T-Network in the TR808 and BD88 is one such circuit, so we can replace Figure 15 with the simpler diagram that is Figure 16 (below right).

[![](http://media.soundonsound.com/sos/feb02/images/synthss34bd88.s.gif)][20]

Analogue Solutions' BD88 TR808 kick drum module.

With an oscillator of this sort, you can use positive feedback to determine the decay characteristic of the sound. If you increase the amplitude of the feedback too far, the decay will extend to infinity, and we will be back where we started, with a continuous oscillator.

Understanding this, we should now be able to decipher Figure 14\. The Trigger kicks the oscillator into life, initiating the audio signal (the presence of an Accent increases the impulse and, through the action of some very clever circuitry that we will not discuss here, also makes the sound punchier by accentuating the start of the note). Next, some of the Trigger+Accent signal --- which is, of course, a brief CV pulse --- is added into the audio signal path to emulate the beater hitting the membrane of the drum. The combined signal then passes through a low-pass filter that allows you to remove higher frequencies, thus subduing the amount of click if desired. The final VCA then amplifies the signal and feeds it to the output.

Finally, it's worth noting that, by accident or design (I'm not sure which), the TR808 kick drum oscillator goes slightly flat at long decays, which is exactly what's required to make the patch sound convincing. Earlier Roland rhythm products (such as the CR68 and CR78) did not do so, and this is one reason why analogue drum machines sounded so much better from the TR808 onwards.

**How Low Can You Go?**

So there we are... the secrets of analogue bass drums laid bare. And, although the TR808 bass drum circuit shows that there is more than one way to skin this particular cat, we've never strayed too far from the theories laid down last month. All of which goes to show that, if you understand the nature and fundamental characteristics of a sound, you can take a good shot at recreating it on any synth. Moreover, as Roland discovered with the TR808 and 909, you may even develop a sound that will become a sonic masterpiece in its own right. Now, wouldn't that make it all worthwhile? [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][21]

[0]: http://www.soundonsound.com/sos/Feb02/articles/synthsecrets0202.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/feb02/images/fig01abassdrum.l.gif
[3]: http://media.soundonsound.com/sos/feb02/images/fig01bbassdrum2.l.gif
[4]: http://media.soundonsound.com/sos/feb02/images/fig02axxeblockdiagram.l.gif
[5]: http://media.soundonsound.com/sos/feb02/images/fig03axxeusedelements.l.gif
[6]: http://media.soundonsound.com/sos/feb02/images/fig04axxekickdrum.l.gif
[7]: http://media.soundonsound.com/sos/feb02/images/fig05axxefilteradsr.l.gif
[8]: http://media.soundonsound.com/sos/feb02/images/fig06axxevcaadsr.l.gif
[9]: http://media.soundonsound.com/sos/feb02/images/fig07arpaxxekickdrum.l.gif
[10]: http://media.soundonsound.com/sos/feb02/images/fig08sh101kickdrum1.l.gif
[11]: http://media.soundonsound.com/sos/feb02/images/fig09sh101kickdrum2.l.gif
[12]: http://media.soundonsound.com/sos/feb02/images/fig10sh101syndrum.l.gif
[13]: http://media.soundonsound.com/sos/feb02/images/fig11analysis.l.gif
[14]: http://media.soundonsound.com/sos/feb02/images/fig12analysis2.l.gif
[15]: http://media.soundonsound.com/sos/feb02/images/fig13tr909bd.l.gif
[16]: http://media.soundonsound.com/sos/feb02/images/synthss34bd99.l.gif
[17]: http://media.soundonsound.com/sos/feb02/images/fig14tr808bd.l.gif
[18]: http://media.soundonsound.com/sos/feb02/images/fig15decayingsine.l.gif
[19]: http://media.soundonsound.com/sos/feb02/images/fig16bridgedt.l.gif
[20]: http://media.soundonsound.com/sos/feb02/images/synthss34bd88.l.gif
[21]: http://www.soundonsound.com