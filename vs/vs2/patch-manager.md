# Patch Manager

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/patch-manager.png" alt="Patch Manager" style="padding: 0px; bottom-padding: 0px" />
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

Click the patch name on the [Status Bar](overview#status-bar) to open the Patch Manager. 

VS’s Patch Manager has a simple layout with banks displayed on the left, patch list in the center and the tags pool for patch search filtering on the right. The patch list displays patches from the selected bank.

The patch browser’s left side contains three default banks:

- **Factory** - A selection of built-in patches.
- **Local** - The default bank where custom patches are saved
- **Favorites** - Provides a shortcut to all starred/favorited patches.

There are additional banks available as separate expansions. Any banks you own will appear unlocked. See [Store Panel](store-panel) for more information.

You can import/export customs banks with the import/export buttons on the bank section. You can also import custom patches to either the local bank or to custom banks using the import button in the patches section.

When exporting your custom patches or banks, you have the option to export the assets — media files used by the patches. Use the [Media Manager](media-manager) to relink your assets when importing them in another computer.

You can filter your patches either by name, using the search bar, or by the tags in the filter section.

To save a patch, click on the save icon in the Status Bar. This will open the **patch save dialog**.


<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/save-dialog.png" alt="Save Dialog" style="padding: 0px; bottom-padding: 0px" />
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

Here you can change the patch name, select the bank where you’ll save it and choose its tags. You can then save it as a new patch (Save as), which will create a .vpf file, or you can overwrite an existing patch (Save) if you’re using a name that is in use by another patch. You can also choose to save a reference to the current audio/MIDI files in the patch, which will then be loaded into the [Audio Player](audio-player) when the patch is opened.

***
[Previous: Audio Player](audio-player)<br>
[Next: Store Panel](store-panel)