import React from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'
import Provider from './Provider'

const NavigationBar = ({ searchOnChange, createOnClick, deleteProvidersOnClick, showDeleteAndMerge = false } ) => (
  <Menu fixed="top">
    <Menu.Item position='left'>
      <Input
        size='large'
        icon='search'
        placeholder='Search provider name'
        onChange={searchOnChange}
        style={{ width: '650px' }}
      />
    </Menu.Item>
    <Menu.Item position='right'>
      <Button color='blue' animated='fade' onClick={createOnClick}>
        <Button.Content visible>Create</Button.Content>
        <Button.Content hidden>Provider</Button.Content>
      </Button>
      { showDeleteAndMerge && (
        <Button basic color='red' animated='fade' onClick={deleteProvidersOnClick}>
          <Button.Content visible>Delete</Button.Content>
          <Button.Content hidden>Providers</Button.Content>
        </Button>
      )}
      { showDeleteAndMerge && (
        <Button basic color='green' animated='fade' onClick={() => alert('Clicked on Merge....')}>
          <Button.Content visible>Merge</Button.Content>
          <Button.Content hidden>Providers</Button.Content>
        </Button>
      )}
    </Menu.Item>
  </Menu>
)

export default NavigationBar
