# Synth Secrets  
_Original article: [http://www.soundonsound.com/sos/Dec02/articles/synthsecrets1202.asp][0]_

**![](http://media.soundonsound.com/sos/dec02/images/synthrolandjx10.gif)How _did_ they make that sound on a subtractive synth? We continue to dissect the analogue 'Acoustic Piano' Perfomance from Roland's 1986-vintage JX10\. This is the 44th article in a 63-part series. Read [all parts][1].**

_

---

**Gordon Reid  
**_

Last month, I discussed how we can use hard sync to generate radical changes in the harmonic structure of a sound. I then described how the JX10 uses its two contour generators to adjust the harmonic content and amplitudes of its two sync'ed oscillators to produce the basic timbre of an acoustic piano patch, the factory Tone entitled 'Piano 1-B'.

I have combined all of last month's parameter tables into the table on the right, and drawn the incomplete patch that they describe as Figure 1 (below). With these as our starting points, we can now take the output from the oscillator/mixer sections --- shown as the blue arrow to the far right of the diagram --- and m
![](http://media.soundonsound.com/sos/dec02/images/fig01piano1bmixed.s.gif)

Figure 1: The parameters for the 'Piano 1-B' Tone in the table on the right represent this synth structure.

ould it using the JX10's filter and VCA/chorus sections to create something that (I hope) will sound not too dissimilar to a genuine piano.

But, before going any further, let's pause to ask ourselves what it is that makes the piano such a special instrument. Well, the sound itself is remarkable, rich in harmonic and enharmonic components, and it evolves in a mind-bogglingly complex fashion at all stages throughout a note. But I want to look beyond this, and find what it is that makes playing the piano such a uniquely rewarding experience.

Let's start by eliminating a few possibilities. For example, the magic of the piano isn't found in the range of expression that you can coax from a single note. This is because, once you have p
![](http://media.soundonsound.com/sos/dec02/images/fig02nosensitivity.s.gif)

Figure 2: Increasing or decreasing the key velocity has no effect on the sound.

ressed a key and the note has sounded, there's nothing you can do to control it other than to let it ring, or to curtail it by releasing the key. Instruments such as brass and woodwind --- on which changes of blowing pressure and embouchure can create wide variations of tone and amplitude within a single note --- are clearly superior in this area. Nor is the piano's special quality a consequence of the sheer power of its sound, nor its depth. A cathedral organ scores more highly in both these areas. It's not the sense of aggression you can obtain from the sound, because the overdriven guitar is (probably) tops in this area, and --- at the other end of the spectrum --- it's not because of a particularly sweet or soulful quality, because a solo violin or cello is far more emotive and evocative. It's not even a consequence of the piano's huge frequency range and polyphony because, although the aforementioned cathedral organ is the piano's equal in these areas, it nonetheless lacks the piano's _je ne sais quoi_. So what _is_ the secret?

For me, the magic of the pia
![](http://media.soundonsound.com/sos/dec02/images/fig03apianoaction.s.gif)![](http://media.soundonsound.com/sos/dec02/images/fig03bsynthaction.s.gif)

Figures 3(a) and 3(b): Comparing the velocity-sensitive piano mechanism to a velocity-sensitive synth keyboard.

no derives from its dynamic range. No other instrument is as flexible, and no other offers you such latitude to caress some notes while pounding away at others, mingling gentle melodies with pulsating rhythms and accompaniments. So, when we synthesize the piano, it's not enough to recreate an initial timbre and reproduce it polyphonically. In that direction lie the unquiet ghosts of unloved Crumars, Galantis, and Sound City Jo'annas. We need to do more... we need to make our patch respond to keyboard dynamics.

**Dynamics Explained**

When referring to keyboard instruments, the terms dynamics and touch sensitivity refer to the velocity at which the key moves downward when you play it. Aftertouch, which is when you press a key more firmly into its bed after the initial impact, is a separate thing altogether.

So let's start by considering the effect of playing a note 'softer' or 'harder' (ie. with lesser or greater velocity) on a powerful synth such as a Sequential Prophet 5, an Oberheim OBX, a Roland Jupiter 8 or a Moog Memorymoog. Despite their huge synthesis power, none of these offers velocity sensitivity, so, no matter how you play the key, the end result is always the same (this, of course, is one of reasons why early synths offered so many alternative controllers). We can represent this insensitivity as shown in Figure 2 above.

If we now recall the piano mechanism explained two months ago and shown again in Figure 3(a) above, it's clear that, when we depress a note more quickly, the various levers project the hammer towards the strings at a higher velocity, resulting in a greater amount of energy being transferre
![](http://media.soundonsound.com/sos/dec02/images/fig04vtrelationship.s.gif)

Figure 4: Plotting the relationship between key velocity and the time taken to travel the distance between the detectors.

d from the muscles in your fingers to the string. But a synth has no levers or strings... so we need to employ a different mechanism that generates the same effect.

One such mechanism might use two photocells that measure the length of time taken for the underside of the key to pass two points in its travel. If you consider the two red dots under the key in Figure 3(b), as shown above, it should be intuitively obvious that the velocity with which you depress the key is inversely proportional to the time that elapses between the key passing the first dot and then passing the second --- in other words, the greater the velocity, the shorter the time interval. I have plotted this relationship in Figure 4, left.

Now try to imagine how we could achieve on a synth the piano's effect of the note becoming louder the harder you hit a key. In fact, it's not so hard. If you map the velocity to the Gain of a VCA controlling the audio signal path (as shown in Figure 5 on the previous page) so that there is a proportional relationship between velocity and Gain, then the greater the velocity, the greater the Gain, and the louder the resultant note (see Figure 6). This is broadly consistent with the physical mechanism s
![](http://media.soundonsound.com/sos/dec02/images/fig05applyingresponse.s.gif)

Figure 5: Using velocity to control the loudness of a sound.

hown in Figure 3(a).

Of course, there's no reason why we should stick to simple proportional relationships such as those depicted in Figures 4 and 6\. Modern synths are little more than specialised computers with application-specific I/O, so their designers can define any relationships they wish, by describing them mathematically. In this way, it's easy to replace the simple dynamics curve of Figure 6 with the non-linear one shown in Figure 7 (right).

Extending this idea still further, there's no reason why the parameter on the 'Y' axis of Figures 6 and 7 should be limited to Loudness. If we change this to 'amount', it could be the filter cutoff frequency, or the gain of a VCA controlling the LFO amount applied to the pitch of an oscillator... or indeed anything else in the synth. And therein lies the secret of 'dynamics'. By defining a suitable response to key velocity, and then directing it to appropriate modules within the voice structure, we can make the sound come alive in ways that are all but impossible without velocity sensitivity.

**Multiple Dynamics Responses In One Patch**

Last month, when discussing the parameters in its Mixer section, I told you that the JX10 offers four dyna
![](http://media.soundonsound.com/sos/dec02/images/fig06vgrelationship.s.gif)

Figure 6: As the velocity increases, the sound gets louder --- here, a linear relationship is shown.

mics curves of the type shown in Figures 4 and 6\. Roland refers to these as '1', '2', '3' and 'Off', and I have drawn them in Figure 8 (below).

As you can see, 'Off' means that any signal controlled by Dynamics is insensitive to key velocity, as shown in Figure 2\. This means that, if you set all the Dynamics parameters in the JX10 to 'Off' it emulates the aforementioned Prophet, OB, Jupiter or Memorymoog. Given the esteem in which these synths are held, this may seem like a good idea, but I suggest that it is not.

If you set the Dynamics to '1', a controlled signal responds in a way similar to that shown in Figure 7\. At low velocities, the CV (or its digital equivalent) is still applied with an appreciable amount. Then, as you play with greater and greater velocity, the amount increases gradually. As you approach maximum velocity, the curve slopes sharply upwards until the CV is applied with 100 percent of its maximum amplitude.

Dynamics curve '2' is another relationship we have already seen: the dynamics response is linear, without any offset. Finally, there's curve '3', which starts close to zero and then, after a fairly flat response for about half the dynamic range, curves sharply up to its maximum.

You may ask ![](http://media.soundonsound.com/sos/dec02/images/fig07vgrelationship2.s.gif)

Figure 7: A non-linear relationship between velocity and loudness.

why we need four different responses. Well, imagine that you want to affect the signal level, the signal brightness and the amount of vibrato by different amounts, but all controlled by the key velocity. Figure 9 on the previous page shows that, by choosing different response curves, you could --- with a single key velocity of, say, half the possible maximum --- generate CVs of approximately 55 percent, 47 percent and 17 percent of maximum. Figure 10 (right) shows the block diagram for this, and demonstrates how you can make each element of the sound respond in a unique fashion.

**The Brightness Response Of The 'Piano 1-B' Tone**

So let's now return to the JX10's 'Piano 1-B' Tone, and see how Roland's voice programmers took last month's sync'ed sound and shaped it to create a patch that sounded similar to, and responded in a similar way to, an acoustic piano.

The table on the right shows the parameters contained in the JX10's powerful filter section, together with the values used in the patch
![](http://media.soundonsound.com/sos/dec02/images/fig08jx10dynamics.s.gif)

Figure 8: The four dynamics responses offered by the JX10\.

. We can represent this as shown in Figure 11 (below).

The parameters show that the high-pass filter (HPF) is inactive; all the low frequencies in the sound are allowed to pass unhindered. In contrast, the unmodified cutoff frequency of the low-pass filter (LPF) is set to a value of '53' (out of a maximum of 99), suggesting that it lies close to the middle of its range. The resonance of '2' is tiny... barely perceptible, but perhaps enough to create a slight accent to the sound. The Key Follow of '24' determines that the cutoff frequency rises as you play up the keyboard, but only at 24 percent of the rate of increase in the pitch of the sound. This means that --- all other things being equal --- higher notes are brighter than lower ones, but in a relatively subtle way. 

The LFO does not affect the cutoff frequency, but the second envelope does so (parameter 58) at a maximum amplitude (controlled by Dynamics curve 1) of approximately 14 percent of its maximum (as defined by parameter 55). We know the shape of the second envelope (parameters 91 to 95) because we used it last month. Shown again in Figure 12 (top), we can see that it is a fair representation of the shape of a piano note.

Knowing all of the above,
![](http://media.soundonsound.com/sos/dec02/images/fig09exampledynamics.s.gif)

Figure 9: Generating different controller gains using different dynamics curves.

we can now draw a diagram (Figure 13,) that represents the filter response. Note that the value of 53 in parameter 52 ensures that the cutoff frequency can never fall to zero, so the note is never fully shut off by the filter.

**The Amplitude Response Of The 'Piano 1-B' Tone**

Having defined the filter response, we can now determine the final stage in the 'Piano 1-B' signal path; the output amplifier and its associated chorus unit. There are four parameters for this, as shown in the table on the right.

These settings show that the maximum level is approximately 96 percent, that the VCA contour is determined by the second envelope, and that the audio signal gain responds to dynamics according to curve 2 in Figure 8\. The choice of dynamics curve 2 is an interesting one, because it means that, at low velocities, the sound is produced at vanishingly low amplitudes. This is not quite representative of a real piano, in which the hammer does not _just_ hit the string; if you press the key fast enough for the hammer to reach the string it will be travelling fast enough to produce a clearly audible note. I might be tempted, therefore, to change this to curve 3, which has the correct response at low velocities, but which would require a much heavier touch to ob
![](http://media.soundonsound.com/sos/dec02/images/fig10differentresponse.s.gif)

Figure 10: Obtaining different loudness, brightness and modulation responses from a single key velocity.

tain middling amplitudes.

The final parameter in this group defines the status of the chorus unit. Since chorus would fatten the sound in a way that is inappropriate for an acoustic piano simulation, this is set to 'Off'. We can therefore draw the VCA/Chorus parameters as shown in Figure 14 (below).

**Modulation (Or The Lack Of It)**

The last table this month (below) includes the final set of parameters in every JX10 patch; those that define the LFO modulation generator. Although these contain values (because, on the JX10, they must) they are irrelevant. This is because the LFO has no effect at any of the points in the patch where it could modulate the pitch or brightness. In other words, the values for parameters 14 and 26 (p
![](http://media.soundonsound.com/sos/dec02/images/fig11piano1bfilter.s.gif)

Figure 11: The filter block diagram for the 'Piano 1-B' Tone.

itch modulation of DCO1 and DCO2 respectively) and 53 (VCF cutoff frequency modulation) are '0'.

**'Piano 1-B'**

So now it's time to put the whole patch together. This is a non-trivial task, and one for which the _SOS_ graphics department are going to pin my photo to the nearest dartboard. Nonetheless, it's important that we should see how the various parts of the patch interact. Here goes... take a look at Figure 15 on the next page. I have simplified this diagram slightly to make it manageable, and, as in previous months, I have omitted a bunch of mixers and multiples to improve legibility. Nonetheless, it's still a daunting diagram, and
![](http://media.soundonsound.com/sos/dec02/images/fig12env2.s.gif)

Figure 12: Using velocity to control the loudness of a sound.

this reflects the complexity of the JX8P and Super JX10 voice structure. Oh, and don't forget... this represents just _one_ of the 12 voices in a JX10, so with the exception of the keyboard, every block must be repeated 12 times (see Figure 16, below).

Despite this, the signal path for each voice remains relatively simple, and is not too different from that on basic synths such as the Roland SH101, ARP Axxe, Korg MS20 and Minimoog that we have considered over the past year or so. Look at it... it's just a couple of oscillators passed through a high-pass filter, a low-pass filter and an amplifier. Clearly, the complexity lies in the JX10's ability to _control_ these components using its assignable contour generators and touch-sensitivity. And that, dear read
![](http://media.soundonsound.com/sos/dec02/images/fig13brightness.s.gif)

Figure 13: The brightness response of the 'Piano 1-B' Tone.

er, is one of the great secrets of synthesis: as is so often the case, it's not what you've got, it's what you can do with it that matters.

Indeed, we can apply this adage to almost every area of synthesis. You can be programming string sounds, brass, percussion, or a wide variety of different sounds real or imagined, and the attention you pay to dynamic response will almost certainly repay itself many times over.

**And The Result?**

So, how does 'Piano 1-B' sound? Well, to my ears it's a wonderful imitation of an electro-mechanical piano. It has some of the timbre of my beloved RMI Electrapiano but, with dynamics, it is of course much more flexible than this. On the othe
![](http://media.soundonsound.com/sos/dec02/images/fig14piano1bamp.s.gif)

Figure 14: The amplifier/chorus section of the Tone.

r hand, it's not exactly a Fender Rhodes 73 or a Wurlitzer EP200 either, although it occupies the same sonic territory as both of these.

However, 'Piano 1-B' is _not_ similar to an acoustic grand piano. Each note responds in a piano-like fashion, and with the JX10 in 'Whole" mode (in which one patch utilises all 12 voices) there is sufficient polyphony to play it in piano-like fashion. But it still doesn't _sound_ like a piano.

This means that, despite my promises of the past couple of months, I haven't fulfilled my promise to create an acoustic piano patch on a subtractive synth... there's still something missing. So, next month, we'll continue to press forward on this noble quest, and discover yet more tricks that the JX10 has tucked away in its analogue electronic sleeves. Until then... [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][2]

![](http://media.soundonsound.com/sos/dec02/images/fig15piano1b.s.gif)

Figure 15: The 'Piano 1-B' Tone block diagram.

![](http://media.soundonsound.com/sos/dec02/images/fig1612voice.s.gif)

Figure 16: A polyphonic representation of the 'Piano 1-B' Tone.



[0]: http://www.soundonsound.com/sos/Dec02/articles/synthsecrets1202.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://www.soundonsound.com