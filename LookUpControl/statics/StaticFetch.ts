export const staticFetch = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false" top="10">
<entity name="account">
  <attribute name="name" alias = "name" />
  <attribute name="accountid" alias = "key"/>
  <order attribute="name" descending="false" />
  <filter type="and">
    <condition attribute="name" operator="like" value="%@filter@%" />
  </filter>
</entity>
</fetch>`;