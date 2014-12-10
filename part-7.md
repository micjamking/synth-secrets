# Synth Secrets, Part 7: Envelopes, Gates & Triggers  
_Original article: [http://www.soundonsound.com/sos/nov99/articles/synthsecrets.htm][0]_

You press a key on your synth. It plays a note. That's it, right? Wrong. **Gordon Reid** explains the role of envelopes, triggers, and gates in this deceptively simple process. This is the sixth article in a 63-part series. Read [all parts][1].

[![](http://media.soundonsound.com/sos/nov99/images/fig1_2s.gif)][2]Let's recap. In the first two parts of this series, we discussed the nature of vibrations and the waveforms of sounds. In part three, we looked at the relationship between signals, modifiers and controllers, and became familiar with the concept of an envelope generator, which helps to illustrate this point. Then, over the following three months, we looked at some of the many attributes of filters. You might think that, with all this under our electronic belts, we are now in a position to discuss the secrets of creating amazing synth sounds.

Unfortunately, we have still got a long way to go before we have covered all the background for programming even a simple monophonic synthesizer. For example (and ignoring the relative qualities of the keyboards themselves) we haven't explained why some synths not only sound different, but feel so different to play. So this month we are going to take a detailed look at Gates and Triggers. Along the way, we will discover why the two most revered monosynths of the early '70s --- the Minimoog and the ARP Odyssey --- can respond so differently when you play them. But before we can do this, we must revisit a topic first raised in part three. We are going to talk some more about envelopes.

[![](http://media.soundonsound.com/sos/nov99/images/fig3s.gif)][3]If you've been keeping up with this series, you probably think that you understand analogue envelope generators. After all, they're all ADSRs, aren't they? The Attack time determines how percussive a sound is, and the Decay determines how long the sound takes to fall to the Sustain level after the initial accent. After that, the Release controls the time it takes for the note to die away when you release the key. Simple huh? Yeah... too simple. In fact, there are many other envelope shapes, some more complex than ADSRs, some less so. Furthermore, many envelopes are themselves modified by other controls with names such as Amount and Invert. But these will have to remain matters for another instalment of this series. This month, we're going to look at some unexpected ways in which the common envelopes in _your_ synth can affect the sounds you make and the way you play.

**Envelopes & Contours**

[![](http://media.soundonsound.com/sos/nov99/images/fig4s.gif)][4]Picture a common waveform, such as a sine or square wave. These have nice, symmetrical shapes that repeat time, after time, after time... Indeed, if they didn't repeat, you wouldn't be able to perceive the pitch of the sound --- at best you would hear a click. The common sawtooth and pulse waveforms (which can be, but are not, strictly speaking, symmetrical) also repeat in this fashion. Now, with these images in your head, consider Figure 1, below. This shows a remarkably simple waveform that is neither symmetrical, nor repeated.

Now, remember what happens when we apply the output of this circuit to another part of the synthesizer such as a voltage-controlled amplifier (see Figure 2, below). If the amplifier's gain at any instant is proportional to the voltage shown in Figure 1, the waveform becomes the loudness contour of the sound. If the destination is a voltage-controlled low-pass filter (a VCF) the curve shown in Figure 1 becomes the brightness contour of the sound. Clearly, the contour in Figure 1 can be used as the output from what we usually call an Envelope Generator. OK, so I covered this point in part three of this series, but it bears repeating.

[![](http://media.soundonsound.com/sos/nov99/images/fig5s.gif)][5]A good definition of an envelope is this: the graph of the way a parameter changes over time is a visual representation of its envelope. But, in a typical synthesizer, you can --- at any given moment --- change the value of a parameter using any number of modifiers (see Figure 3, on page 130). The total envelope, therefore, may be the sum of the simultaneous actions of numerous devices. So here's this month's first Synth Secret (and it's a biggie!):

_What we usually call an envelope generator may be only one contributor to the true envelope of a given parameter._

It is for this reason, perhaps, that some of the earliest synthesizer manufacturers adopted a different term for the devices that we now call Envelope Generators. They called them 'Transient Generators'. It's a more precise term, and the one that we will use from now on.

So now we are in a position to apply some standard terminology to Figure 1\. The first stage is the Attack of the transient, and the second stage is its Decay. The figure represents, therefore, a functional 'AD' transient generator. Simple as these devices appear, you should not underestimate the power of AD generators. Figure 4 (opposite) shows what happens when you apply two dissimilar AD contours to a single modifier such as a VCA or VCF. As you can see, the envelope generated by the summation of the two contours is a more complex 4-stage contour. Furthermore, it's one that you cannot obtain from what is commonly called a 4-stage ADSR envelope generator. Food for thought, huh?

**[![](http://media.soundonsound.com/sos/nov99/images/fig6s.gif)][6]Triggers & Gates**

Figure 4 shows what happens when you apply more than one transient to a single parameter at any given time. But that's just one plot in this month's story. There's a second, and it's related to what happens when we play more than one note sequentially...

As you know, most analogue monosynths are controlled by keyboards. What you may not know is that many of these generate three signals every time you press a key. The first is the pitch CV; it helps to determine the pitch of the sound produced, for any given key. The second is the Trigger. This is a pulse of short duration that, at the exact moment you press a key, can trigger the actions of devices such as transient generators. The third is the Gate. Like the Trigger, the Gate's leading edge tells other parts of the synth that you have pressed a key. However (and unlike the Trigger) the Gate remains 'Open' for the whole time that you depress the key. This means that it can also tell the rest of the synth the exact moment that you _release_ the key. Figure 5 (opposite) shows these signals. Knowing about Gates and Triggers lets us extend our ideas about transients considerably, and leads us to our next Synth Secret:

_[![](http://media.soundonsound.com/sos/nov99/images/fig7s.gif)][7]Although a Trigger will initiate a transient generator, it's the Gate that tells the synth to continue developing the contour until the key is released. Without a Gate, all you would hear would be a short 'blip' at the start of the sound, but nothing thereafter._

Figure 6 (see page 132) shows a 3-stage transient generator that uses the timing information in the Gate signal to complete the Attack stage and then maintain the maximum voltage for the entire duration that the key is pressed. For reasons that are obvious if you studied geometry, we call this device a Trapezoid transient generator. The EMS VCS3 is one of the few synthesizers that offers a Trapezoid, and in the early '70s I thought that it must be a very grand device indeed because it had such a grand name. Oh well... 

The next level of complexity is the one that everybody knows; it's the ADSR. In the '70s the 4-stage ADSR contour was so standard that many players called all transient generators 'ADSRs', whether they were or not. Now look at Figures 1, 6 and 7 again. Each of these assumes that every transient exists in isolation, and that every contour has the time to run its course before you initiate the next. But, even on a monosynth, this simply won't be true in the majority of cases.

[![](http://media.soundonsound.com/sos/nov99/images/fig8s.gif)][8]For reasons that should be obvious, we call Triggers and Gates timing signals, and every synth needs them. But why both? Surely the Gate is performing the trigger function, and the Trigger itself is unnecessary? This is a question that dogged me for many years, until I was fortunate enough to have both a Minimoog and an ARP Odyssey sitting next to each other in my 'live' keyboard rig. I often used these to play a heavily contoured solo sound, with an instantaneous (Attack = 0) percussive 'spike' of loudness and brightness at the start of each note. This spike was, of course, created by applying a pair of contours to the VCF and VCA.

Strangely, and despite the outstanding reputation of the Minimoog's contour generators, I knew that I preferred to play my fast solos on the Odyssey, but I did not know why. All I knew was that my playing sounded punchier on the Odyssey, and that I could play at higher speeds than I could on the Minimoog. The reason for this was nothing to do with my playing (I was rubbish on both) nor was it anything to do with the relative quality of the instruments' keyboards. The answer lay in the engineering within the instruments: the Odyssey uses triggers, while the Minimoog does not.

[![](http://media.soundonsound.com/sos/nov99/images/fig9s.gif)][9]Look at Figure 8 (on page 132). This shows what happens when I play lines very quickly on an Odyssey. As you can see, the notes overlap because I can't remove my fingers quickly enough from previous notes before playing the next. But you can also see that the contour remains dynamic, and that the start of each note is clearly defined. This is because the Odyssey re-triggers its transient generators every time I play a note, regardless of whether previous ones are released or not, and regardless of whether the Gate is Open or not. This means that my sounds are correctly articulated, no matter how unevenly I release the keys.

Let's contrast this with the Minimoog, a synthesizer that does not generate triggers. Its single, unconventional timing signal is called an S-Trigger, but is, in fact, a Gate. So the same line played identically on the Minimoog produces the filter and amplitude contour shown in Figure 9 (opposite, below). As you can see, the envelope is far less interesting and, although you will still hear the second and successive notes at the sustain level, the punch is lost. The synth solo becomes dull and uninteresting, and the audience remains unimpressed. Indeed, the only way to recapture the dynamics and punch of the Odyssey solo would be to release each note before the next, and I have already admitted that I am not capable of that at high speed. Consequently, for average players rattling off fast solos at the limits of their abilities, the Odyssey is superior to the Minimoog (the fact that the Odyssey keyboard is duophonic and the Minimoog's is monophonic also helps, but that's a topic for another day).

[![](http://media.soundonsound.com/sos/nov99/images/fig10odysseyadtrigger.s.gif)][10]  
Figure 10: A re-triggered AD transient.

[![](http://media.soundonsound.com/sos/nov99/images/fig11adandgateonly.s.gif)][11]  
Figure 11: The failure of the AD transient with no triggers.

At this point, it's probably worth asking yourself what the result would be if the transient generators on the Odyssey and the Minimoog were merely ADs or trapezoids. The answers may surprise you. If the contours were ADs, the Odyssey solo would sound much the same, but the Minimoog solo would disappear to silence after the first note or two (see Figures 10 and 11, on page 134).

Strangely, if the contours were trapezoids, the two solos would sound identical, provided that the Odyssey's contours did not reset to zero at the start of each note (see Figures 12 and 13, on page 134). Hang on... what's all this about resetting to zero? Check out Figure 14 (also on page 134). This shows the contour of a series of 'reset to zero' trapezoid transients. Some synths reset in this way, and it can lead to a very disjointed sound indeed. Because of their slower Attacks and Releases, this is particularly noticeable on some string ensembles where the single envelope generator resets every time it is initialised. Some early polysynths do this, too. It's horrible, and sounds like the instrument is swallowing its tongue. Glump!

**Putting It Together**

We have covered a lot of ground this month, but please don't think that we've done more than scratch the surface of this topic. There are many other facets to transient generators and timing signals. After all, we have only come as far as 4-stage contours, and even analogue synths can have five or more, with Hold stages and Break points amongst other extra goodies. And then there are the synths that allow you to control each stage of the contour using Control Voltages as well as the generator's own knobs or sliders (a common use for this is to make a transient quicker at high pitches than at low ones --- just as happens on acoustic instruments such as pianos and guitars). Also, there are other useful destinations for the contours. One of these is the pitch of the sound. Many instruments are slightly sharp at the start of each note, and a simple transient generator such as an AD allows you to recreate this effect. Another useful destination is the modulation speed. 'Real' players do not add vibrato, growl or tremolo with electronic regularity, and changing the effect by applying contours to the LFO speed and depth can be most affective (this was one of the rare facilities that made the Yamaha GX1 and CS80 so revered). And what about extending the ideas of applying two contours to a single VCO or VCF, and even delaying the trigger of one slightly with respect to the other...?

[![](http://media.soundonsound.com/sos/nov99/images/fig12retriggeredtrapez.s.gif)][12]  
Figure 12: A re-triggered trapezoid transient.

[![](http://media.soundonsound.com/sos/nov99/images/fig13gatedtrapezoid.s.gif)][13]  
Figure 13: A set of gated trapezoid transients.

[![](http://media.soundonsound.com/sos/nov99/images/fig14resetretriggering.s.gif)][14]  
Figure 14: A contour generated by a 'reset to zero' transient generator.

Unfortunately, there's no space this month to delve into these issues, so I'm going to finish this article with a little story. When you hear a sound, your brain uses just the first few milliseconds to ascertain what instrument is producing it. Roland was the first manufacturer to take advantage of this, and its (albeit digital) Linear Arithmetic Synthesis included a brilliant trick: a short sample generated the beginning of each sound, with a standard synthesized tone for the Sustain and Release stages. So, if the sample was the 'chiff' of a flute, it hardly mattered (within reason) what came next, the patch sounded pretty much like a flute.

Of course, you can't add samples to the sounds on an analogue synthesizer. But if your synth can recreate the initial waveform of a flute (it's only a filtered sawtooth plus a little noise, after all), it follows that you need only use a transient generator (or two, or three...) to recreate the initial contours of the flute. Then you will be able to play a single note that sounds very much like a flute. And that's exactly how it is. 

So this month's final Synth Secret, and the one that explains why some Contour Generators are calibrated in milliseconds rather than just '0' to '10' is:

_If you want to recreate acoustic sounds or program interesting synthesizer sounds deterministically (rather than rely on blind chance) then, at the very least, you must be able to analyse and create the brightness and loudness contours of the sound._

But will you be able to use your wonderful flute patch to play a complete line or phrase in a way that sounds like a flute? If you are using an Odyssey (the decidedly superior synth a few paragraphs ago) the answer is "probably not". After all, no flautist chiffs every note individually, so permanent multi-triggering is a disadvantage. The Minimoog, on the other hand, allows you to retrigger some notes (by releasing the previous ones) and slur others (by overlapping them) much as the real flautist would do. When some people realise this --- that particular synths are more suitable for certain tasks than others --- they start collecting synths. In this case, the Minimoog is capable of producing a more realistic flute solo --- but of course, you could always hunt down one of the rare instruments with a single/multi triggering switch, and then you would have the best of both worlds... If you start to think like this, watch out. A room full of synths is but an understanding bank manager away! [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][15]

[0]: http://www.soundonsound.com/sos/nov99/articles/synthsecrets.htm
[1]: http://www.soundonsound.com/search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/nov99/images/fig1_2.gif
[3]: http://media.soundonsound.com/sos/nov99/images/fig3.gif
[4]: http://media.soundonsound.com/sos/nov99/images/fig4.gif
[5]: http://media.soundonsound.com/sos/nov99/images/fig5.gif
[6]: http://media.soundonsound.com/sos/nov99/images/fig6.gif
[7]: http://media.soundonsound.com/sos/nov99/images/fig7.gif
[8]: http://media.soundonsound.com/sos/nov99/images/fig8.gif
[9]: http://media.soundonsound.com/sos/nov99/images/fig9.gif
[10]: http://media.soundonsound.com/sos/nov99/images/fig10odysseyadtrigger.l.gif
[11]: http://media.soundonsound.com/sos/nov99/images/fig11adandgateonly.l.gif
[12]: http://media.soundonsound.com/sos/nov99/images/fig12retriggeredtrapez.l.gif
[13]: http://media.soundonsound.com/sos/nov99/images/fig13gatedtrapezoid.l.gif
[14]: http://media.soundonsound.com/sos/nov99/images/fig14resetretriggering.l.gif
[15]: http://www.soundonsound.com